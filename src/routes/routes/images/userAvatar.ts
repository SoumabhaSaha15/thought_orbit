import fs from "fs/promises";
import express from "express";
import { UserModel } from "./../../../models/index.js";

export default async (req: express.Request, res: express.Response) => {
  try {
    const [id, extension] = req.params['id'].split(".");
    const validExt = ["jpg", "jpeg", "png"];
    const user = await UserModel.findById(id).select({ avatar: true }).lean();
    if (user?.avatar == null) throw new Error('User Not found!!!');
    else if (!validExt.includes(extension)) throw new Error('Invalid extension!!!');
    else res.send(Buffer.from(user.avatar.toString('base64'), "base64url"));
  } catch (err) {
    res.send(await fs.readFile('./public/assets/not-found.jpg'));
  }
};