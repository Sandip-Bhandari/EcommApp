const controller = require("../controller/auth.controller");
const express = require("express");
const verifySignUp = require("../middlewares/verifySignUp");
const expressApp = express();
const router = express.Router();

expressApp.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUserName, verifySignUp.checkRolesExisted],
  controller.signup
);
router.post("/signin", controller.signin);

module.exports = router;