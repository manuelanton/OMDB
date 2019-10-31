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

router.get("/delete/:imdbID", (req, res) => {
  Favorite.findOne({ where: { imdbID: req.params.imdbID } }).then(found => {
    res.send(found);
    found.destroy();
  });
});

router.get("/", (req, res) => {
  if (req.user) {
    Favorite.findAllFromUser(req.user.id).then(favs => {
      res.send(favs);
    });
  } else {
    res.send("LOG IN FIRST");
  }
});

module.exports = router;

//
