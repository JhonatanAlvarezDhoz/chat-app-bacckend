const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const { generateJWT } = require("../helpers/JWT/jwt");

const Login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const userDB = await User.findOne({ email: email });
    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: `the email: ${email} dont find`,
      });
    }

    const validatePassword = bcrypt.compareSync(password, userDB.password);
    if (!validatePassword) {
      return res.status(404).json({
        ok: false,
        msg: `the password not valid`,
      });
    }

    //Generate
    const token = await generateJWT(userDB.id);

    res.json({
      ok: true,
      user: userDB,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "contact to the admin",
    });
  }
};

module.exports = {
  Login,
};
