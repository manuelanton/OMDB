"use strict";

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../passport");

router.get("/:userID", (req, res) => {
  User.findByPk(req.params.userID).then(user => res.json(user));
});

router.post("/register", (req, res) => {
  User.create(req.body).then(user => console.log(user.username));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

module.exports = router;
