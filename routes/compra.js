//Estructura de CRUD
const router = require('express').Router();
const {
    guardarCompra,
    obtenerCompra
} = require('../controllers/compras')


router.get('/', obtenerCompra)
router.post('/', guardarCompra)

module.exports = router;
