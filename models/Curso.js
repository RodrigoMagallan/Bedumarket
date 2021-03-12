// Curso.js

/** Clase que representa los cursos */
/*class Curso{
	constructor(id, nombre, url, costo, descripcion){
		this.id = id; // identificador único del curso
		this.nombre = nombre; // nombre que tendrá el curso
		this.url = url; // url donde se encontrá el curso a impartir (dentro de la misma página)
		this.costo = costo; // costo del curso al comprar
		this.descripcion = descripcion; // descripción ed lo que se hará en dicho curso
	}
	
}

module.exports = Curso;*/

// importamos por separado los mÃ©todos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opciÃ³n de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

//creamos el modelo para curso
const Usuario = sequelize.define('Curso', {
  id: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  nombre: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  costo: {
    type: DataTypes.INTEGER,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  }
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'Curso'});

// exportamos el modelo.
module.exports = Curso;
