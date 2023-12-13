const path = require("path");
const rootDir = require("../util/path");

exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContactus = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};
