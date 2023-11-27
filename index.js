const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

io.on("connection", (socket) => {
  socket.on("send-message", function (message, nickname, color) {
    io.emit("send-message", message, nickname, color);
    //console.log(`message from ${nickname}: ${message}`);
  });
});
server.listen(3000, () => {
  console.info("Server is running on PORT 3000");
});
