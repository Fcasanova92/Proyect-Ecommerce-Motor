import  {dbConnection, getConnection}  from './dbConnection.js';
import { config } from 'dotenv';
import data from './local.json' assert { type: 'json' };

config();
dbConnection();
const db = getConnection();

// // <<---------------------------------------------------------------------------------ESTE CODIGO ANDA--------------------------------------------------------------------------------->>
// // Preparo el Arreglo de Categorias, sin q se repita
// let categories = [];
// data.map(item=>{
//     if(!categories.includes(item.type)){
//         categories.push(item.type);
//     }
// });
// // Lo Subimos a db
// categories.map(categorie => {
//     db.query(`SELECT * FROM category WHERE name = "${categorie}"`,(error, result) => {
//         if(result.length > 0)
//         {
//             console.log(`Lo sentimos, la categoría ${categorie} ya existe!.`);
//             return;
//         }
//         db.query(`INSERT INTO category (name) VALUES ("${categorie}")`,()=>{
//             console.log(`Exito, se agregó la categoría ${categorie}.`);
//             return;
//         });
//     });
// });
// // Insertamos los productos y el token (ex sku) lo pasamos con una subconsulta segun el id del name
// data.map(item=>{
//     db.query(`INSERT INTO product (token, isNews, brand, categoryID, capacity, color, thumbnail, description, price) 
//         VALUES ("${item.token}", ${item.isNews}, "${item.brand}", (SELECT id FROM category WHERE name = "${item.type}" LIMIT 1), ${item.capacity}, "${item.color}", "${item.thumbnail}", "${item.description}", ${item.price})`,(err)=>{
//         if(err) {
//             console.log(err);
//             return;
//         }
//     });
// });


// <<---------------------------------------------------------------------------Opcion asincronica----------------------------------------------------------------------------------->>

const findOrCreateCategory = async (value) => { 
    return new Promise((resolve, reject) => {
        db.query('SELECT id FROM category WHERE name = ?', [value], (error, result) => {
            if(error) {
                return reject(error);
            }
            if(result.length > 0) {
                return resolve(result[0].id);
            }
            db.query('INSERT INTO category (name) VALUES (?)', [value], (error,result) => {
                if(error) {
                    return reject(error);
                }
                return resolve(result.insertId);
            });
        });
    });
}

const insertProduct = (values) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO product (token, isNews, brand, categoryID, capacity, color, thumbnail, description, price) VALUES (?)'
        db.query(sql, [values], (error, result) => {
            if(error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

const fill = async (data) => {
    try {
        for (const item of data) {
            const categoryID = await findOrCreateCategory(item.category);
            const values = [ item.token, item.isNews, item.brand, categoryID, item.capacity, item.color, item.thumbnail, item.description, item.price];
            await insertProduct(values);
        }
    } catch (error) {
        console.log(error);
    }
}

const run = await fill(data);