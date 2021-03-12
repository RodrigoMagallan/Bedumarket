/*  Archivo controllers/cursos.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de cursos
const Curso = require('../models/Curso')

function guardarCurso(req, res) {
  //Instancia del modelo Curso
  const curso = Curso.build(req.body)
  curs.save().then(curse => {
    return res.status(201).json(curse.toAuthJSON())
  }).catch(next);
}

function obtenerCurso(req, res) {
  //Consulta a la base de datos
Curso.findAll().then(curse => {
  return res.json(curse)
}).catch(error => {
  return res.sendStatus(401)
})
}

function modificarCurso(req, res) {
const curso = Curso.create({
  id : req.params.id,
  ...req.body
})
//Guardado en la BD

curs.save().then(user => {
  return res.status(201).json(curso.toAuthJSON())
}).catch(next);
}

function eliminarCurso(req, res) {
// Usamos findByPK para buscar al usuario por su id
const curs = Curso.findByPk(req.Curso.id);
if (curs === null){
  // si no existe lanzamos un 400 
  return res.sendStatus(401)
} else {
  // Si existe, lo eliminamos
  curs.destroy().then(curs => {
    return res.status(200)
  }).catch(err => {
    return res.sendStatus(500)
  })
}
}


// exportamos las funciones definidas
module.exports = {
  guardarCurso,
  obtenerCurso,
  modificarCurso,
  eliminarCurso
}
