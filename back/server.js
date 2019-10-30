const express = require("express");
const app = express();
const db = require("./config/db");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("./routes/index");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "cualquierCosa", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000.");
  });
});
