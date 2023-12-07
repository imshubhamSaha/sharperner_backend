const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/admin/add-product" method="POST"><input type="text" name = "title" placeholder="product"><input type="number" name="size" placeholder="size"><button type="submit">Add Product</button></form></body></html>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
