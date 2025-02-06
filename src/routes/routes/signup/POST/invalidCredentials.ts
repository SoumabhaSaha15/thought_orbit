import fs from 'fs/promises';
import express from "express";
import { User } from "./../../../../models/index.js";
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    req.body = User
      .pick({
        name: true,
        email: true,
        password: true
      })
      .parse(req.body);
    next();
  } catch (err) {
    next((err as Error));
  }
}
