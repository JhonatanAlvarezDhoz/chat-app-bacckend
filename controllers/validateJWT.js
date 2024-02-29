const { response } = require("express");

const User = require("../models/user");
const { generateJWT } = require("../helpers/JWT/jwt");

const ValidateJWT = async (req, res = response) => {
  const uid = req.uid;
  const token = await generateJWT(uid);
  const user = await User.findById(uid);

  res.json({
    ok: true,
    user,
    token,
  });
};

module.exports = {
  ValidateJWT,
};
