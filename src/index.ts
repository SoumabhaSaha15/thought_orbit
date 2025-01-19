import { GridFSBucket } from 'mongodb';
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import { connect } from "mongoose";
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";
try {
  dotenv.config();
  const CONNECTOR = await connect(process.env.DB_URI as string);
  const db = CONNECTOR.connection.db;
  const gridFSBucket = db ? new GridFSBucket(db, { bucketName: process.env.GFSB_SRC as string }) : null;
  if (!gridFSBucket) throw new Error('Failed to init GridFSBucket');
  const APP = express()
    .use(express.static(path.join(import.meta.dirname, "./../public")))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(async (req: express.Request, _: express.Response, next: express.NextFunction) => {
      req.GFSB = gridFSBucket; //Centralizing GridFSBucket.
      next();
    })
    .use(router)
    .set("view engine", "ejs")
    .set("views", path.join(import.meta.dirname, "./../views"))
    .listen(process.env.PORT, () => {
      console.log(chalk.blue.bold(`running http://localhost:${process.env.PORT}`));
    });
  process.on("unhandledRejection", (reason) => {
    console.log(chalk.red.bold("Unhandled Rejection:"), '\n', reason);
  });
  //Graceful shutdown.
  process.on("SIGINT", async () => {
    console.log(chalk.yellow.bold("Gracefully shutting down..."));
    await CONNECTOR.disconnect();
    APP.close(() => {
      console.log(chalk.green.bold("Server closed. MongoDB disconnected."));
      process.exit(0);
    });
  });
} catch (error) {
  console.log(chalk.red.bold((error as Error).message));
}
