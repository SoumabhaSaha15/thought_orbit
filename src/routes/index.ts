import express from "express";
const Router = express.Router();
Router.get('/', (req: express.Request, res: express.Response) => {
  res.render('index',{title:"Thought Orbit.IO"});
});
Router.get('/home',(req: express.Request, res: express.Response) => {
  res.redirect('/');
})
export default Router;