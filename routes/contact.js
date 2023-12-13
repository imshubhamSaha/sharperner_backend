const express = require("express");
const router = express.Router();

const contactUs = require("../controllers/contactus");

router.get("/contact", contactUs.getContactus);

router.post("/contact", contactUs.postContactus);

module.exports = router;
