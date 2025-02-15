import express from "express";
import { User, UserModel } from "./../../../../models/index.js";
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
export const loginParser = User.omit({ name: true, avatar: true });
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const data = loginParser.parse(req.body);
    let user = (await UserModel.findOne({ email: data?.email }).exec());
    if (!user) throw new Error('No user found!!! Please signup first.');
    const userId = user._id.toString();
    const hashResult = bcrypt.compareSync(data?.password || '', user.password);
    if (!hashResult) throw new Error('Wrong email or password!!!');
    const TenYearsFromNow = new Date();
    TenYearsFromNow.setFullYear(TenYearsFromNow.getFullYear() + 10);
    res.cookie('id', jwt.sign({id:userId}, process.env.JWT_KEY), {
      httpOnly: true,
      expires: TenYearsFromNow,
    });
    return res.redirect('/user/' + userId);
  } catch (err) {
    next(err);
  }

}
