import express from "express";
import { User } from './../../../../models/index.js'
export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    req.body = User.parse(req.body);
    next();
  } catch (err) {
    next((err as Error));
  }
}
