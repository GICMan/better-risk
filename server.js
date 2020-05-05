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

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
