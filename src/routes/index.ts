import express from "express";
const Router = express.Router();
import SignUp from './routes/sign_up/index.js';
import ErrorHandler from './routes/sign_up/error.js'
Router.get('/', async (_: express.Request, res: express.Response) => {
  res.render('index', { title: "Thought Orbit.IO" });
});
Router.get('/home', async (_: express.Request, res: express.Response) => {
  res.redirect('/');
});
Router.use(SignUp);
export default Router;