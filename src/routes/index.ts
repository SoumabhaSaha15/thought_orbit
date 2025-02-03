import express from "express";
import signup from "./routes/signup/index.js";
import login from "./routes/login/index.js";
import test from "./routes/test/index.js";
const router = express.Router();
router
  .get('/', async (_: express.Request, res: express.Response) => res.render('index'))
  .get('/home', async (_: express.Request, res: express.Response) => res.redirect('/'));
router
  .use(signup)
  .use(login)
  .use(test);
export default router;