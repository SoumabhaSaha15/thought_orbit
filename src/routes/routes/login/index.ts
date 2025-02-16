import invalidLoginCredential from "./POST/invalidLoginCredentials.js";
import wrongCredentials from "./POST/wrongCredentials.js";
import _redirectToUser from "./POST/redirectToUser.js";
import cookiesNotFound from "./GET/cookiesNotFound.js";
import invalidCookies from "./GET/invalidCookies.js";
import redirectToUser from "./GET/redirectToUser.js";
import setCookie from "../signup/POST/setCookie.js";
import _userNotFound from "./POST/userNotFound.js";
import userNotFound from "./GET/userNotFound.js";
import error from "./error.js";
import express from "express";
const router = express.Router();
router
  .route('/login')
  .get(
    cookiesNotFound,
    invalidCookies,
    userNotFound,
    redirectToUser
  )
  .post(
    invalidLoginCredential,
    _userNotFound,
    wrongCredentials,
    setCookie,
    _redirectToUser
  );
router.use(error);
export default router;