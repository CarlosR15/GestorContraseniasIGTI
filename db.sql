-- base de datos pa que jale
CREATE DATABASE IF NOT EXISTS gestCont_db;

USE gestCont_db;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS sitiosWeb (
	id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    nombre VARCHAR(100) NOT NULL,
    url VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS contrasenias (
	id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    sitio_id INT,
    usuario VARCHAR(100) NOT NULL,
	contrasenia VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (sitio_id) REFERENCES sitiosWeb(id)
);