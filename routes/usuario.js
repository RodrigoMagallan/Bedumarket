// Estructura del CRUD
const router = require('express').Router();
const {
    guardarUsuario,
    obtenerUsuarios,
    modificarUsuario,
    suspenderUsuario
} = require('../controllers/usuarios')

router.get('/', obtenerUsuarios)
router.post('/', guardarUsuario)
router.put('/:id', modificarUsuario)
router.delete('/:id', suspenderUsuario)

module.exports = router;