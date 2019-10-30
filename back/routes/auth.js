"use strict";

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../passport");

router.get("/logout", (req, res) => {
  req.logout();
  res.send("Logged out!");
});

router.post("/register", (req, res) => {
  User.create(req.body).then(user => res.send(user.username));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

module.exports = router;
