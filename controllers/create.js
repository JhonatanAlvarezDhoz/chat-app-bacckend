const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const { generateJWT } = require("../helpers/JWT/jwt");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email: email });

    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: `the email: ${email} already exist in this data base`,
      });
    }

    const user = new User(req.body);
    //encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    //Generate
    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      user,
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
  createUser,
};
