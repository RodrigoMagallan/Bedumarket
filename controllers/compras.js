/*  Archivo controllers/compra.js
 *  Simulando la respuesta de objetos Compra
 *  en un futuro aquÃ­ se utilizarÃ¡n los modelos
 */

// importamos el modelo de compra
const Compra = require('../models/Compra')

function guardarCompra(req, res, next) {
  const prch = Compra.build(req.body)
// Guarda esta instancia, es hasta este momento que se modifica la base de datos.
prch.save().then(user => {
  return res.status(201).json(user.toAuthJSON())
}).catch(next);
}

function obtenerCompra(req, res) {
 // Hace una consulta en la base de datos.
 Compra.findAll().then(users => {
  return res.json(users)
}).catch(error => {
  return res.sendStatus(401)
})


}

// exportamos las funciones definidas
module.exports = {
  guardarCompra,
  obtenerCompra

}
