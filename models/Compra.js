// Compra.js

/** Clase que representa las compras realizadas */
class Compra{
	constructor(id, nombre_curso, fecha, monto){
		this.id = id; //identificación de la compra
		this.nombre_curso = nombre_curso //indica el nombre del curso
		this.fecha = fecha; // fecha de la compra realizada
		this.monto = monto; //monto de la compra
	}
	
}

module.exports = Compra;
