// importamos las dependencias necesarias
var router = require('express').Router();
// const postRoutes = require('./post.route');
const passport = require('../config/passport');
// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('welcome to BeduMarket');
});

router.use('/usuario', require('./usuario'));
router.use('/curso', require('./curso'));
router.use('/compra', require('./compra'));

// exportamos nuestro nuevo router
module.exports = router;
