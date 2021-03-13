const db = require ("../models");
const Compra = db.compra;
const Op = db.Sequelize.Op;

//Generar una compra
exports.create = (req, res) => {
  // Validate request
  // Create a Compra
  const compra = {
    id: req.body.id,
    id_usuario: req.body.id_usuario,
    id_curso: req.body.id_curso,
    nombre_curso: req.body.nombre_curso,
    fecha: req.body.fecha,
    monto: req.body.monto
  };

  // Save compra in the database
  Compra.create(compra)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while realizing the Compra."
      });
    });
};

//Mostrar todas las compras realiadas
exports.findAll = (req, res) => {
  Compra.findAll({ where:{id:{[Op.gt]: 0 }}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving compras."
      });
    });
};

//Encontrar una compra por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Compra.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving compra with id=" + id
      });
    });
};

