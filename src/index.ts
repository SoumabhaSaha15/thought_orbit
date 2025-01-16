import FileUpload from "express-fileupload";
import CookieParser from "cookie-parser";
import Router from "./routes/index.js";
import { connect } from "mongoose";
import Express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";
try {
  dotenv.config();
  await connect(process.env.DB_URI as string);
  Express()
    .use(Express.static(path.join(import.meta.dirname, "./../public")))
    .use(Express.json())
    .use(Express.urlencoded({ extended: true }))
    .use(CookieParser())
    .use(FileUpload())
    .use(Router)
    .set("view engine", "ejs")
    .set("views", path.join(import.meta.dirname, "./../views"))
    .listen(process.env.PORT, () => {
      console.log(chalk.blue.bold(`running http://localhost:${process.env.PORT}`));
    });
} catch (error) {
  console.log((error as Error).message);
}
