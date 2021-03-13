//Declaro variables
const db = require("../models");
const Curso = db.curso;
const Op = db.Sequelize.Op;

//Crear un nuevo curso
exports.create = (req, res) => {
  //Función POST
  const curso = {
    id: req.body.id,
    nombre: req.body.nombre,
    url: req.body.url,
    costo: req.body.costo,
    descripcion: req.body.descripcion
  };

  //Guardar usuario en la base de datos
  Curso.create(curso).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error ocurred while creating the Curso."
    });
  });
};

//Encontrar Cursos

exports.findAll = (req, res) => {
  Curso.findAll({where:{id:{[Op.gt]: 0}}})
    .then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
          err.message  || "Some error ocurred while retrieving the data"
        });
      });
};

//Encontrar un usuario por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Curso.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Curso with id=" + id
      });
    });
};

//Actualizar un usuario por Id
exports.update = (req, res) => {
  const id = req.params.id;

  Curso.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Curso was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Curso with id=${id}. Maybe Usuario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Curso with id=" + id
      });
    });
};

//Borrar usuario
exports.delete = (req, res) => {
  const id = req.params.id;

  Curso.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Curso with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Curso with id=" + id
      });
    });
};