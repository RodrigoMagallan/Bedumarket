// Curso.js
module.exports = (sequelize , Sequelize) => {

const Curso = sequelize.define('Curso',{

  id: {
    // se indica el tipo de dato de la columna.
    type: Sequelize.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  nombre: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  costo: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  descripcion: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  }
},
{
  timestamps: false,
});
return Curso
};
