const db = require("../config/db");
const S = require("sequelize");
const crypto = require("crypto");
const Favorite = require("./Favorite");

class User extends S.Model {}
User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    salt: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

User.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

User.prototype.addToFavs = function(movie) {
  return Favorite.create(movie).then(fav => this.addFavorite(fav));
};

User.hasMany(Favorite, { as: "favorite" });

module.exports = User;
