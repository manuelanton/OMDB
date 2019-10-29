const S = require("sequelize");

module.exports = new S("postgres://localhost:5432/OMDB", { logging: false });
