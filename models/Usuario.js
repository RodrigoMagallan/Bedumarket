// Usuario.js

/** Clase que representa a los usuarios para registrarse */
class Usuario{
	constructor(id, usuario, nombre, email, contraseña, forma_de_pago){
		this.id = id; // identificador del usuario
		this.usuario = usuario; // pseudonimo del usuario
		this.nombre = nombre; // nombre completo del usuario
		this.email = email; // correo electronico del usuario
		this.contraseña = contraseña; // contraseña con la que accederá el usuario a los cursos
		this.forma_de_pago = forma_de_pago; // la forma de pago que utilizará el usuario al hacer transacciones
	}
	
	guardarUsuario(){
		// función para guardar un nuevo registro en la base de datos.
	}

    modificarUsuario(){
        //funcion para modificar algunos datos del usuario
    }

    suspenderUsuario(){
        //funcion para suspender una cuenta de usuario ya que no se podrá hacer uso de eliminar
    }
	
}