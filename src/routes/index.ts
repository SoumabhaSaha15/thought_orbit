import express from "express";
const Router = express.Router();
import signup from './routes/sign_up/index.js'
Router.get('/', (req: express.Request, res: express.Response) => {
  res.render('index',{title:"Thought Orbit.IO"});
});
Router.get('/home',(req: express.Request, res: express.Response) => {
  res.redirect('/');
});
Router.use(signup);
export default Router;