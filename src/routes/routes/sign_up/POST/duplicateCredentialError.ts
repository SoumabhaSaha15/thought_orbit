import express from 'express';
import { UserModel } from '../../../../models/index.js';
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    (new UserModel(req.body)).save().then(_=>{
      res.render('sign_up/success',{message:'Sign up successfull'});
    })
    .catch(error=>{
      next({message:error.message});
    });
  } catch (err) {
    next(new Error((err as Error).message));
  }
}