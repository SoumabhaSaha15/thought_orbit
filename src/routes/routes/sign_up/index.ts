import FileUpload from "express-fileupload";
import express from "express";
import invalidMimeType from "./POST/invalidMimeType.js";
import invalidCredentials from "./POST/invalidCredentials.js";
import duplicateCredentialError from "./POST/duplicateCredentialError.js";
import setCookie from "./POST/setCookie.js";
import ErrorHandler from './error.js'
const Router = express.Router();
Router
  .use(FileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024
    },
    abortOnLimit: true
  }))
  .route('/signup')
  .get(async (_: express.Request, res: express.Response) => res.render('sign_up/index'))
  .post(invalidMimeType, invalidCredentials, duplicateCredentialError, setCookie);
Router
  .use(ErrorHandler);
export default Router;