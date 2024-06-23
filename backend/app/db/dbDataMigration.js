import  {dbConnection, getConnection}  from './dbConnection.js';

import { config } from 'dotenv';

config()

dbConnection()

const db = getConnection()

const categoryValue = ["scooter", "deportiva", "naked", "trail", "touring", "custom", "enduro"]

categoryValue.forEach(value => {

     db.query(`SELECT id FROM category WHERE name = "${value}"`, (err, result) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
        
            return;
        }
        if (result.length > 0) {
            console.log(`La categoría "${value}" ya existe en la base de datos.`);

        } else {
            // Si result.length === 0, significa que no existe, entonces realiza la inserción
            db.query(`INSERT INTO category (name) VALUES ("${value}")`, (err) => {
                if (err) {
                    console.error('Error al creación de la categoría:', err);
                    return;
                }
                console.log(`Categoría "${value}" creada correctamente.`);
               
            });
}})})


db.query('INSERT INTO product (marca, precio, cantidad, category_id) VALUES ("yamaha", 5000000, 3, (SELECT id FROM category WHERE name = "scooter"))', (err) => {
if (err) {
  console.error('Error al creacion del producto:', err);
  db.end()
  return;
}
console.log('producto agregado');
});

db.end()