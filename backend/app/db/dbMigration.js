import  {dbConnection, getConnection}  from './dbConnection.js';

import { config } from 'dotenv';

config()

dbConnection()

const db = getConnection()

db.query(` CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}` , (err) => {
    if (err) {
      console.error('Error al crear la base de datos:', err);
      db.end()
      return;
    }
    console.log('Base de datos creada exitosamente');
  });

db.query(`USE ${process.env.DB_DATABASE}`, (err) => {
    if (err) {
        console.error('Error selecting database:', err);
        db.end()
        return;
    }
    console.log(`Using database ${process.env.DB_DATABASE}`);

});

  // Ejecutar la consulta para crear la tabla 'users'
db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`, (err) => {
  if (err) {
    console.error('Error al crear la tabla "users":', err);
    db.end()
    return;
  }
  console.log('Tabla "users" creada exitosamente');
});

// Ejecutar la consulta para crear la tabla 'productos'
db.query(`CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL
)`, (err) => {
  if (err) {
    console.error('Error al crear la tabla "productos":', err);
    db.end()
    return;
  }
  console.log('Tabla "productos" creada exitosamente');
});

db.end()