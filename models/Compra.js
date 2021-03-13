// Compra.js
module.exports = (sequelize, Sequelize) => {
  const Compra = sequelize.define('Compra',{
    id: {
      // se indica el tipo de dato de la columna.
      type: Sequelize.INTEGER,
      // indicamos que este campo es llave primaria
      primaryKey : true
    },
    id_usuario: {
      type: Sequelize.STRING,
      // indicamos que el campo no admite valores null
      allowNull: false
  
    },
    id_curso: {
      type: Sequelize.STRING,
      // indicamos que el campo no admite valores null
      allowNull: false
    },
    nombre_curso: {
      type: Sequelize.STRING,
      // indicamos que el campo no admite valores null
      allowNull: false
    },
    fecha: {
      type: Sequelize.STRING,
      // indicamos que el campo no admite valores null
      allowNull: false
    },
    monto: {
      type: Sequelize.STRING,
      // indicamos que el campo no admite valores null
      allowNull: false
    }
  }, {
    timestamps: false,});
    return Compra;
}

          



