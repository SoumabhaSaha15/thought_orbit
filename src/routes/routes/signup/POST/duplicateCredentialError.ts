import fs from "fs/promises";
import express from "express";
import { UserModel } from "../../../../models/index.js";
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { _id } = await UserModel.create({ ...req.body, avatar: await fs.readFile(req.file?.path || '') });
    if (req.file?.path) await fs.unlink(req.file.path);
    req.body = { "id": _id };
    next();
  } catch (err) {
    if (req.file?.path) await fs.unlink(req.file.path);
    next(err);
  }
}