const db = require("../config/db");
const S = require("sequelize");

class Favorite extends S.Model {}
Favorite.init(
  {
    Poster: {
      type: S.TEXT
    },
    Title: {
      type: S.STRING
    },
    Type: {
      type: S.STRING
    },
    Year: {
      type: S.STRING
    },
    imdbID: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
