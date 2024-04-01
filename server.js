const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/public")));

io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("update", username + "joined in the conversation");
  });
  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + "left in the conversation");
  });
  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });
});
// app.listen(3000, () => {
//   console.log(`Server is running at http://localhost:3000`);
// });
server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});