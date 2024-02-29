const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {});

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("hableee con el admin");
  }
};

module.exports = { dbConnection };
