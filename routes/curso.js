module.exports = app => {
  const curso = require("../controllers/cursos.js");

  var router = require("express").Router();

  // Create a new usuario
  router.post("/", curso.create);

  // Retrieve all usuario
  router.get("/", curso.findAll);

  // Retrieve a single usuario with id
  router.get("/:id", curso.findOne);

  // Update a usuario with id
  router.put("/:id", curso.update);

  // Delete a usuario with id
  router.delete("/:id", curso.delete);

  app.use('/api/curso', router);
};
