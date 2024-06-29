import  {dbConnection, getConnection}  from './dbConnection.js';

import { config } from 'dotenv';

config();

dbConnection();

const db = getConnection();

// const categoryValue = ["scooter", "deportiva", "naked", "trail", "touring", "custom", "enduro"]

// categoryValue.forEach(value => {

//      db.query(`SELECT id FROM category WHERE name = "${value}"`, (err, result) => {
//         if (err) {
//             console.error('Error al consultar la base de datos:', err);
        
//             return;
//         }
//         if (result.length > 0) {
//             console.log(`La categoría "${value}" ya existe en la base de datos.`);

//         } else {
//             // Si result.length === 0, significa que no existe, entonces realiza la inserción
//             db.query(`INSERT INTO category (name) VALUES ("${value}")`, (err) => {
//                 if (err) {
//                     console.error('Error al creación de la categoría:', err);
//                     return;
//                 }
//                 console.log(`Categoría "${value}" creada correctamente.`);
               
//             });
// }})})


// db.query('INSERT INTO product (marca, precio, cantidad, category_id) VALUES ("yamaha", 5000000, 3, (SELECT id FROM category WHERE name = "scooter"))', (err) => {
// if (err) {
//   console.error('Error al creacion del producto:', err);
//   db.end()
//   return;
// }
// console.log('producto agregado');
// });

// db.end()

//Consulta la db local que tenemos, la recorre y por cada elemento crea un producto, si la categoria del mismo no existe, la crea.

import data from './local.json' assert { type: 'json' };

export const fill = () => {

    const categoria = []

    for (let i = 0; i < data.length; i++) {

        if(!categoria.includes(data[i].type)){

            categoria.push(data[i].type)

        }
        // insertProduct(data[i]);
    }

    console.log(categoria)
    
}


//Insertamos un Producto 
const insertProduct = (data) => {

    const category = getIdCategory(data.type)

    const values = [data.sku, data.isNews, data.brand, data.capacity, data.color, data.thumbnail, data.description, data.price, category]

    const sql = `INSERT INTO product (sku, isNews, brand, capacity, color, thumbnail, description, price, type)
         VALUES (?,?,?,?,?,?,?,?,?)`

    db.query(sql, values,  (err) => {
        if (err) {
            console.error('Error al creacion del producto:', err);
            db.end();
            return;
        }
        console.log('producto agregado');
    });
}

//Insertamos una Categoria
const insertCategory = (name) => {
    db.query(`INSERT INTO category (name) VALUES ("${name}")`, (err) => {
        if (err) {
            console.error('Error al creación de la categoría:', err);
            return;
        }
        console.log(`Categoría "${name}" creada correctamente.`);
    });
}

//Chequeamos si la Categoria Existe
const getIdCategory = (value) => {

    let category_id

        db.query(`SELECT id FROM category WHERE name = "${value}"`, (err, result) => {
        if(err) {
            console.error('Error al consultar la base de datos:', err);
            return;
        }
        console.log(result[0].id)
        category_id = result[0].id
    })
    
    return category_id;
}

fill()