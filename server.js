const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname+"/public")));

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });