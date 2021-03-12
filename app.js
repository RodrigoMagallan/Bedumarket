// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuraciÃ³n de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Sequelize = require('sequelize')

const sequelize = new Sequelize('BeduMarketdb', 'root', '123', {
  host: 'localhost:3306',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
})

sequelize.authenticate()
.then(() => {
  console.log('Its alive!!!!');
})
.catch(err => {
  console.log('No se conecto :(')
})
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});
