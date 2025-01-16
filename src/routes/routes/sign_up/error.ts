import express from 'express';
import { ZodError, ZodErrorMap } from 'zod';
export default (err: Error, req: express.Request, res: express.Response,next:express.NextFunction) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((issue) => (issue.message)).join(' & ');
    res.render('sign_up/error', { "message": message });
  }
  else res.render('sign_up/error', { message: err.message });
}