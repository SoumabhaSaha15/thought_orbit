import FileUpload from "express-fileupload";
import express from "express";
import invalidMimeType from "./POST/invalidMimeType.js";
const Router = express.Router();
Router
  .use(FileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024
    },
    abortOnLimit: true
  }))
  .route('/signup')
  .get((_: express.Request, res: express.Response) => res.render('sign_up/index'))
  .post(invalidMimeType);
export default Router;