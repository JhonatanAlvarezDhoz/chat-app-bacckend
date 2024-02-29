/*

path: /api

*/

const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validate-fields");
const { ValidateJWT } = require("../controllers/validateJWT");
const {
  Login,
  validateJSONWebToken,
  createUser,
} = require("../controllers/index");

const router = Router();

router.post(
  "/create",
  [
    check("name", "the name is required").not().isEmpty(),
    check("email", "the email is required").not().isEmpty(),
    check("password", "the password is required").not().isEmpty(),
    validateFields,
  ],
  createUser
);

router.post(
  "/login",
  [
    check("email", "the email is required").not().isEmpty(),
    check("password", "the password is required").not().isEmpty(),
    validateFields,
  ],
  Login
);

router.get("/validateToken", validateJSONWebToken, ValidateJWT);

module.exports = router;
