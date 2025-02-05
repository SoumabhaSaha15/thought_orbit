import duplicateCredentialError from "./POST/duplicateCredentialError.js";
import invalidCredentials from "./POST/invalidCredentials.js";
import setCookie from "./POST/setCookie.js";
import error_handler from "./error.js";
import express from "express";
import upload from "../../../middleware/multer.js";
const router = express.Router();
router
  .use(upload.single('avatar'))
  .route('/signup')
  .get(async (_: express.Request, res: express.Response) => res.render('signup/index'))
  .post(invalidCredentials, duplicateCredentialError, setCookie);
router.use(error_handler);
export default router;