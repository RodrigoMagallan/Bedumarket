/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de usuarios
const Usuario = require('../models/Usuario')

function guardarUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}

function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(1, 'Juan', 'Vega', 'juan@vega.com')
  var usuario2 = new Usuario(2, 'Monserrat', 'Vega', 'mon@vega.com')
  res.send([usuario1, usuario2])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var usuario1 = new Usuario(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}
function suspenderUsuario(req, res) {
  // se simula una suspención de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} suspendido`);
}

// exportamos las funciones definidas
module.exports = {
  guardarUsuario,
  obtenerUsuarios,
  modificarUsuario,
  suspenderUsuario
}
