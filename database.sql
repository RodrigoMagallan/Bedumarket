CREATE database BeduMarketdb;
USE BeduMarketdb;

CREATE TABLE Usuario(
	id INT NOT NULL PRIMARY KEY,
	usuario VARCHAR(50) NOT NULL,
	nombre VARCHAR(80) NOT NULL,
	email VARCHAR(50) NOT NULL,
	contraseña VARCHAR(30) NOT NULL,
	forma_de_pago VARCHAR(10) NOT NULL);

CREATE TABLE Cursos(
	id INT NOT NULL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	url VARCHAR(80) NOT NULL,
	costo VARCHAR(20) NOT NULL,
	descripcion VARCHAR(150) NOT NULL);

CREATE TABLE Compra(
	id INT NOT NULL PRIMARY KEY,
	id_usuario INT NOT NULL,
	id_curso INT NOT NULL,
	nombre_curso VARCHAR(50) NOT NULL,
	fecha VARCHAR(10) NOT NULL,
	monto VARCHAR(20) NOT NULL,
	FOREIGN KEY(id_usuario) REFERENCES Usuario(id),
	FOREIGN KEY(id_curso) REFERENCES Curso(id));

