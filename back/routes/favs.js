const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Favorite = require("../models/Favorite");

router.post("/", (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      user.addToFavs(req.body).then(fav => res.send(fav));
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  if (req.user) {
    console.log("Entré a la ruta del back.");
    Favorite.findAllFromUser(req.user.id).then(favs => {
      console.log(favs);
      res.send(favs);
    });
  } else {
    res.send("LOG IN FIRST");
  }
});

module.exports = router;

//
