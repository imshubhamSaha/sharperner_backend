// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST"><input type="text" name = "title" placeholder="product"><input type="number" name="size" placeholder="size"><button type="submit">Add Product</button></form></body></html>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  //   res.send({ key1: "value" });
  res.send("<h1> hello to node js </h1>");
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
