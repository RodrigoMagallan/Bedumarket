// Curso.js

/** Clase que representa los cursos */
class Curso{
	constructor(id, nombre, url, costo, descripcion){
		this.id = id; // identificador único del curso
		this.nombre = nombre; // nombre que tendrá el curso
		this.url = url; // url donde se encontrá el curso a impartir (dentro de la misma página)
		this.costo = costo; // costo del curso al comprar
		this.descripcion = descripcion; // descripción ed lo que se hará en dicho curso
	}
	
}

module.exports = Curso;
