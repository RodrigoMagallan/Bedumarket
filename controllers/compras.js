/*  Archivo controllers/compra.js
 *  Simulando la respuesta de objetos Compra
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de compra
const Compra = require('../models/Compra')

function guardarCompra(req, res) {
  // Instanciaremos una nueva compra utilizando la clase compra
  var compra = new Compra(req.body)
  res.status(201).send(curso)
}

function obtenerCompra(req, res) {
  // Simulando una compra y respondiendolos
  var curso1 = new Curso(1, 'Programando en Java', '20/02/2020', '$1200')
  var  = new Curso(1, 'Programando en Java', '20/02/2020', '$1200')
  res.send([curso1, curso2])
}


// exportamos las funciones definidas
module.exports = {
  guardarCompra,
  obtenerCompra,

}
