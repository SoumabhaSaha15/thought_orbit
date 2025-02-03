import express from "express";
const router = express.Router();
router
  .route('/login')
  .get(async (_: express.Request, res: express.Response) => res.render('login/index'));
export default router;