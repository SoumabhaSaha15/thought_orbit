import express from 'express';
import { UserModel } from '../../../../models/index.js';
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { _id } = await (new UserModel(req.body)).save();
    req.body = { "id": _id };
    next();
  } catch (err) {
    next(err);
  }
}