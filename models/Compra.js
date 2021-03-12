// Compra.js

/** Clase que representa las compras realizadas */
/*class Compra{
	constructor(id, nombre_curso, fecha, monto){
		this.id = id; //identificación de la compra
		this.nombre_curso = nombre_curso //indica el nombre del curso
		this.fecha = fecha; // fecha de la compra realizada
		this.monto = monto; //monto de la compra
	}
	
}

module.exports = Compra;*/
// importamos por separado los mÃ©todos de Sequelize y los tipos de dato.
const { Sequelize, DataTypes } = require('sequelize');
// importamos sequelize con la opciÃ³n de memory para forzar al gestor a almacenarla en la memoria.
const sequelize = new Sequelize('mysql::memory:');

const Usuario = require('../models/Usuario');

const Curso = require('../models/Curso');

//creamos el modelo para compra
const Usuario = sequelize.define('Compra', {
  id: {
    // se indica el tipo de dato de la columna.
    type: DataTypes.INTEGER,
    // indicamos que este campo es llave primaria
    primaryKey : true
  },
  nombre_curso: {
    type: DataTypes.STRING,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  nombre: {
    fecha: DataTypes.DATE,
    // indicamos que el campo no admite valores null
    allowNull: false
  },
  monto: {
    type: DataTypes.INTEGER,
    // indicamos que el campo no admite valores null
    allowNull: false
  }
  // le decimos a que tabla de nuestra base de datos corresponde.
},{ tableName: 'Compra'});

Mascota.hasOne(Usuario,{foreignKey: 'id'});
Mascota.hasOne(Curso,{foreignKey: 'id'});

// exportamos el modelo.
module.exports = Compra;
