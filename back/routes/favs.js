const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Favorite = require("../models/User");
const passport = require("../passport");

router.post("/", (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      user.addToFavs(req.body.movie);
    })
    .then(fav => res.send(fav))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  Favorite.findAll({ where: { userId: req.user.id } }).then(favs =>
    res.send(favs)
  );
});

module.exports = router;

//
