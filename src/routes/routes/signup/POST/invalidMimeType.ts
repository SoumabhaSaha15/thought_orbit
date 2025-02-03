import express from 'express';
export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const MT = ["image/jpeg","image/jpg","image/png"]
    const file = Array.isArray(req.files?.avatar) ? (req.files?.avatar[0]) : (req.files?.avatar)!;
    if (!MT.includes(file.mimetype)) throw new Error("invalid mimetype for user avatar");
    req.body = {...req.body,avatar:file.data}
    next();
  } catch (err) {
    next(new Error((err as Error).message));
  }
}