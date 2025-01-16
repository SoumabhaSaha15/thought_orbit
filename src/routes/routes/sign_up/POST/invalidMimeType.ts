import express from 'express';
export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const file = Array.isArray(req.files?.avatar) ? (req.files?.avatar[0]) : (req.files?.avatar)!;
    if (file.mimetype != "image/jpeg") throw new Error("invalid mimetype for user avatar");
    next();
  } catch (err) {
    next(err);
  }
}