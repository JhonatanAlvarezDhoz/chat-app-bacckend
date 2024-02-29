const { io } = require("../index");
// const Bands = require("../models/bands");
// const Band = require("../models/band");

// const bands = new Bands();

// bands.addBand(new Band("Linkin Park"));
// bands.addBand(new Band("Skillet"));
// bands.addBand(new Band("Breaking Benjamin"));
// bands.addBand(new Band("Kiss"));

//message of sockets
io.on("connection", (client) => {
  // console.log("client On");
  // client.emit("active-bands", bands.getBands());
  // client.on("disconnect", () => {
  //   console.log("Client Off");
  // });
  // client.on("message", (payload) => {
  //   console.log("Holamundo", payload);
  //   io.emit("message", { admin: "New Message" });
  // });
  // client.on("New_message", (payload) => {
  //   io.emit("New_message", { admin: "Emit Message to Flutter" });
  // });
  // // client.on("flutter", (payload) => {
  // //   console.log(payload);
  // //   client.broadcast.emit("flutter", payload);
  // // });
  // client.on("votes", (payload) => {
  //   bands.voteBand(payload.id);
  //   io.emit("active-bands", bands.getBands()); //io.emit notifica a todo el servidor inclusive a el que emitio el voto
  // });
  // client.on("add", (payload) => {
  //   const newBand = new Band(payload.name);
  //   bands.addBand(newBand);
  //   io.emit("active-bands", bands.getBands());
  // });
  // client.on("delete", (payload) => {
  //   bands.deleteBand(payload.id);
  //   io.emit("active-bands", bands.getBands());
  // });
});
