/*  Archivo controllers/cursos.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de cursos
const Curso = require('../models/Curso')

function guardarCurso(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase curso
  var curso = new Curso(req.body)
  res.status(201).send(curso)
}

function obtenerCurso(req, res) {
  // Simulando dos cursos y respondiendolos
  var curso1 = new Curso(1, 'Programando en Java', 'www.youtube.com', '$1200', 'Curso intensivo sobre Java')
  var curso2 = new Curso(2, 'Programando en JavaScript', 'www.youtube.com', '$1300', 'Curso intensivo sobre JavaScript')
  res.send([curso1, curso2])
}

function modificarCurso(req, res) {
  // simulando un curso previamente existente que el cliente modifica
  var curso1 = new Curso(1, 'Programando en Java', 'www.youtube.com', '$1200', 'Curso intensivo sobre Java')
  var modificaciones = req.body
  curso1 = { ...curso1, ...modificaciones }
  res.send(curso1)
}
function eliminarCurso(req, res) {
  // se simula una eliminación de un curso, regresando un 200
  res.status(200).send(`Curso ${req.params.id} eliminado`);
}

function suspenderCurso(req, res) {
  // se simula una suspención de curso, regresando un 200
  res.status(200).send(`Curso ${req.params.id} suspendido`);
}


// exportamos las funciones definidas
module.exports = {
  guardarCurso,
  obtenerCurso,
  modificarCurso,
  eliminarCurso,
  suspenderCurso
}
