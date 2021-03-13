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
  },
   nombre: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  contraseña: {
    type: Sequelize.STRING,
  },
  forma_de_pago: {
    type: Sequelize.STRING,
  }
  },{
   timestamps: false,});
  return Usuario;
};



