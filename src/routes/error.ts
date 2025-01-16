import express from 'express';
import { ZodError, ZodErrorMap } from 'zod';
export default (err: Error, req: express.Request, res: express.Response) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((issue) => (issue.message)).join(' & ');
    res.render('error', { "message": message });
  }
  res.render('error', { message: err.message });
}