const express = require("express");
const { resolve } = require("path");
require("dotenv").config();

//DBConfig
const { dbConnection } = require("./database/config");
dbConnection();

//APP Express
const app = express();
//Lectura y parseo del body
app.use(express.json());

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

//Path public
const pathPublic = resolve(__dirname, "public");
app.use(express.static(pathPublic));

//Routes
app.use("/api", require("./routes/auth"));

const { PORT } = process.env;

server.listen(PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running in port", PORT);
});
