import file_upload from "express-fileupload";
import express from "express";
import invalidMimeType from "./POST/invalidMimeType.js";
import invalidCredentials from "./POST/invalidCredentials.js";
import duplicateCredentialError from "./POST/duplicateCredentialError.js";
import setCookie from "./POST/setCookie.js";
import error_handler from "./error.js";
const router = express.Router();
router
  .use(file_upload({
    limits: {
      fileSize: 5 * 1024 * 1024
    },
    abortOnLimit: true
  }))
  .route('/signup')
  .get(async (_: express.Request, res: express.Response) => res.render('signup/index'))
  .post(invalidMimeType, invalidCredentials, duplicateCredentialError, setCookie);
router.use(error_handler);
export default router;