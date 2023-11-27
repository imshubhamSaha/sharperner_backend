// const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the Middle ware");
  next();
});
app.use((req, res, next) => {
  console.log("In the another Middle ware");
  //   res.send({ key1: "value" });
  res.send("<h1> hello to node js </h1>");
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
