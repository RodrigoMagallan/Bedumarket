//Estructura CRUD

const router = require('express').Router();
const {
  guardarCurso,
  obtenerCurso,
  modificarCurso,
  eliminarCurso,
  suspenderCurso
} = require('../controllers/cursos')

router.get('/', obtenerCurso)
router.post('/', guardarCurso)
router.put('/:id',modificarCurso)
router.delete('/:id',eliminarCurso)   
router.delete('/:id', suspenderCurso)

module.exports = router;