import express from "express";
import { ZodError } from "zod";
export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((issue) => (issue.message)).join(' & ');
    res.render('signup/error', { "message": message });
  } else res.render('signup/error', { message: err.message });
}