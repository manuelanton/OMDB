const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../passport");

router.get("/", (req, res) => {
  res.send(req.user);
});

module.exports = router;
