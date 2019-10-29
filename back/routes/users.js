"use strict";

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/:userID", (req, res) => {
  User.findByPk(req.params.userID).then(user => res.json(user));
});

router.get("/", (req, res) => {
  User.findAll({}).then(users => res.json(users));
});

router.post("/register", (req, res) => {
  User.create(req.body).then(user => console.log(user));
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login"
  })
);

module.exports = router;
