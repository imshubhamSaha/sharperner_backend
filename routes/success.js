const express = require("express");
const router = express.Router();

const success = require("../controllers/success");

router.get("/success", success.getSuccess);

module.exports = router;
