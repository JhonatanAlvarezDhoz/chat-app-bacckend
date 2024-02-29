const jwt = require("jsonwebtoken");

const validateJSONWebToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "The token in required",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    req.uid = uid;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token not valid",
    });
  }
};

module.exports = {
  validateJSONWebToken,
};
