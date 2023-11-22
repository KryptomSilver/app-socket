const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>INICIO DE SERVER</h1>");
});

server.listen(3000, () => {
  console.info("Server is running on PORT 300");
});
