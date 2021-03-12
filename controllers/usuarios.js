/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de usuarios
const Usuario = require('../models/Usuario')

function guardarUsuario(req, res) {
// construye una instancia del modelo Usuario con los argumentos que recibe en la petición
const usr = Usuario.build(req.body)
// Guarda esta instancia, es hasta este momento que se modifica la base de datos.
usr.save().then(user => {
  return res.status(201).json(user.toAuthJSON())
}).catch(next);
}

function obtenerUsuarios(req, res) {
 // Hace una consulta en la base de datos.
 User.findAll().then(users => {
  return res.json(users)
}).catch(error => {
  return res.sendStatus(401)
})
}

function modificarUsuario(req, res) {
 // Se crea un usuario con el id del que se quiere modificar y los cambios descritos en el body
 const usr = User.create({
  id : req.params.id,
  ...req.body
})
// Se guarda en la DB
usr.save().then(user => {
  return res.status(201).json(user.toAuthJSON())
}).catch(next);
}
function suspenderUsuario(req, res) {
  // se simula una suspención de usuario, regresando un 200
    // Usamos findByPK para buscar al usuario por su id
    const usr = User.findByPk(req.usuario.id);
    if (usr === null){
      // si no existe lanzamos un 400 
      return res.sendStatus(401)
    } else {
      // Si existe, lo eliminamos
      usr.destroy().then(usr => {
        return res.status(200)
      }).catch(err => {
        return res.sendStatus(500)
      })
    }
}

// exportamos las funciones definidas
module.exports = {
  guardarUsuario,
  obtenerUsuarios,
  modificarUsuario,
  suspenderUsuario
}
