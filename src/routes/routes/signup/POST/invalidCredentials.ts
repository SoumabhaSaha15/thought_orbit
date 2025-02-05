import fs from 'fs/promises';
import express from "express";
import { User } from "./../../../../models/index.js";
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    User.parse({...req.body,avatar:await fs.readFile(req.file?.path||'')});
    next();
  } catch (err) {
    next((err as Error));
  }
}
