const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const addEventListeners = require("./eventListeners");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  addEventListeners(io, socket);
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});
