// Usuario.js

/** Clase que representa a los usuarios para registrarse */
/*class Usuario{
	constructor(id, usuario, nombre, email, contraseña, forma_de_pago){
		this.id = id; // identificador del usuario
		this.usuario = usuario; // pseudonimo del usuario
		this.nombre = nombre; // nombre completo del usuario
		this.email = email; // correo electronico del usuario
		this.contraseña = contraseña; // contraseña con la que accederá el usuario a los cursos
		this.forma_de_pago = forma_de_pago; // la forma de pago que utilizará el usuario al hacer transacciones
	}
	
}

module.exports = Usuario*/

// importamos por separado los métodos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opciÃ³n de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');
//creamos el modelo para usuario
const Usuario = sequelize.define('Usuario', {
  id: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  usuario: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
   nombre: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  contraseña: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  forma_de_pago: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  }
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'Usuario'});

// exportamos el modelo.
module.exports = Usuario;
