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
	
	guardarCurso(){
		// función para guardar un nuevo registro en la base de datos.
	}
    
    modificarCurso(){
        //función para modificar algún curso en la base de datos.
    }

    eliminarCurso(){
        //función para eliminar un curso de la base de datos.
    }

    suspenderCurso(){
        //función para suspender un curso en la base de datos
    }
}