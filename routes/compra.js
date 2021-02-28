//Estructura de CRUD
const router = require('express').Router();
const {
    guardarCompra,
    obtenerCompra
} = require('../models/Compra');


router.get('/', obtenerCompra)
router.post('/', guardarCompra)

module.exports = router;