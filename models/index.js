const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./Usuario.js")(sequelize, Sequelize);
db.curso = require("./Curso.js")(sequelize, Sequelize);
db.compra = require("./Compra.js")(sequelize, Sequelize);

db.compra.belongsToMany(db.usuario, {
  through: "usuario_compra",
  as: "usaurios",
  foreignKey: "id_usuario",
});
db.compra.belongsToMany(db.curso, {
  through: "curso_compra",
  as: "cursos",
  foreignKey: "id_curso",
});

module.exports = db;
