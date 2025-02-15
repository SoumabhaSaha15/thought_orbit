import invalidLoginCredential from "./POST/invalidLoginCredential.js";
import invalidCookies from "./GET/invalidCookies.js";
import redirectToUser from "./GET/redirectToUser.js";
import error from "./error.js";
import express from "express";
const router = express.Router();
router
  .route('/login')
  .get(invalidCookies, redirectToUser)
  .post(invalidLoginCredential);
router.use(error);
export default router;