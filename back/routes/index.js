"use strict";
/* eslint-disable new-cap */

const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/me", require("./me"));

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
  res.status(404).end();
});

module.exports = router;
