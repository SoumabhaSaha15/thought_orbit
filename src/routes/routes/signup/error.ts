import express from "express";
import { ZodError } from "zod";
import { MongoServerError } from 'mongodb';
export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((issue) => (issue.message)).join(' & ');
    res.render('signup/error', { "message": message });
  } else if (err instanceof MongoServerError) res.render('signup/error', { message: 'Email already taken.' });
  else res.render('signup/error', { message: err.message });
}