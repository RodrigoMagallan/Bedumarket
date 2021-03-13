module.exports = (sequelize, Sequelize) =>{
//creamos el modelo para usuario

const Usuario = sequelize.define('Usuario', {
  id: {
    // se indica el tipo de dato de la columna.
    type: Sequelize.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  usuario: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
   nombre: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  contraseña: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  forma_de_pago: {
    type: Sequelize.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  }
  },{
   timestamps: false,});
  return Usuario;
};



