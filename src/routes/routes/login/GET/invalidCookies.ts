import express from "express";
import { UserModel } from "./../../../../models/index.js";
import jwt, { JwtPayload } from 'jsonwebtoken';
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    if (req.cookies['id'] === undefined) return res.render('login/index');
    let payload: string | JwtPayload = jwt.verify(req.cookies['id'] || '', process.env.JWT_KEY);
    payload = payload as JwtPayload;
    if (payload.id === null) return res.render('login/index');
    const result = await UserModel.exists({ _id: payload.id });
    if (!result) res.render('signup/error', { message: "No user found !!! Try clearing cookies." });
    else {
      req.query.id = payload.id;
      next();
    }
  } catch (err) {
    next(err);
  }
}
