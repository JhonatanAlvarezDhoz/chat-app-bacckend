const { validateJSONWebToken } = require("../middlewares/validate-jwt");
const { createUser } = require("./create");
const { Login } = require("./login");

module.exports = {
  createUser,
  Login,
  validateJSONWebToken,
};
