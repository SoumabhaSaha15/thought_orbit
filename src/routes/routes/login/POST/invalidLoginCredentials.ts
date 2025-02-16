import express from "express";
import { User } from "../../../../models/index.js";
export default async (req: express.Request, _: express.Response, next: express.NextFunction) => {
  const loginParser = User.omit({ name: true, avatar: true });
  try {
    req.body = loginParser.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
}
