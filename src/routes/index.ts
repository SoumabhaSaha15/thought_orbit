import express from "express";
import sign_up from './routes/sign_up/index.js';
import test from './routes/test/index.js'
const router = express.Router();
router
  .get('/', async (_: express.Request, res: express.Response) => res.render('index'))
  .get('/home', async (_: express.Request, res: express.Response) => res.redirect('/'));
router
  .use(sign_up)
  .use(test);
export default router;