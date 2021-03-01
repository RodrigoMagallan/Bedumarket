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
  var compra1 = new Compra(1, 'Programando en Java', '20/02/2020', '$1200')
  var compra2 = new Compra(2, 'Programando en JavaScript', '20/03/2020', '$1200')
  res.send([compra1, compra2])
}

// exportamos las funciones definidas
module.exports = {
  guardarCompra,
  obtenerCompra

}
