import  {dbConnection, getConnection}  from './dbConnection.js';

import { config } from 'dotenv';

config()

dbConnection()

const db = getConnection()

db.query(`CREATE TABLE IF NOT EXISTS category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
)`, (err) => {
if (err) {
  console.error('Error al crear la tabla "category":', err);
  db.end()
  return;
}
console.log('Tabla "category" creada exitosamente');
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
    cantidad INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    FOREIGN KEY (category) REFERENCES category(id)
)`, (err) => {
  if (err) {
    console.error('Error al crear la tabla "productos":', err);
    db.end()
    return;
  }
  console.log('Tabla "productos" creada exitosamente');
});

db.query(`CREATE TABLE IF NOT EXISTS likes (
  id INT NOT NULL,
  product_id JSON NOT NULL,
  FOREIGN KEY (product_id) REFERENCES productos(id),
  FOREIGN KEY (id) REFERENCES users(id)
)`, (err) => {
if (err) {
  console.error('Error al crear la tabla "likes":', err);
  db.end()
  return;
}
console.log('Tabla "likes" creada exitosamente');
});

db.end()