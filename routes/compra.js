module.exports = app => {
  const compra = require("../controllers/compras.js");

  var router = require("express").Router();

  // Create a new compra
  router.post("/", compra.create);

  // Retrieve all compra
  router.get("/", compra.findAll);

  // Retrieve a single compra with id
  router.get("/:id", compra.findOne);


  app.use('/api/compra', router);
};
