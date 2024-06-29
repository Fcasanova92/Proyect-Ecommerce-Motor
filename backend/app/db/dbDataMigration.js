import  {dbConnection, getConnection}  from './dbConnection.js';
import { config } from 'dotenv';
import data from './local.json' assert { type: 'json' };

config();
dbConnection();
const db = getConnection();

// <<---------------------------------------------------------------------------------ESTE CODIGO ANDA--------------------------------------------------------------------------------->>
// Preparo el Arreglo de Categorias, sin q se repita
let categories = [];
data.map(item=>{
    if(!categories.includes(item.type)){
        categories.push(item.type);
    }
});
// Lo Subimos a db
categories.map(categorie => {
    db.query(`SELECT * FROM category WHERE name = "${categorie}"`,(error, result) => {
        if(result.length > 0)
        {
            console.log(`Lo sentimos, la categoría ${categorie} ya existe!.`);
            return;
        }
        db.query(`INSERT INTO category (name) VALUES ("${categorie}")`,()=>{
            console.log(`Exito, se agregó la categoría ${categorie}.`);
            return;
        });
    });
});
// Insertamos los productos y el token (ex sku) lo pasamos con una subconsulta segun el id del name
data.map(item=>{
    db.query(`INSERT INTO product (token, isNews, brand, categoryID, capacity, color, thumbnail, description, price) 
        VALUES ("${item.token}", ${item.isNews}, "${item.brand}", (SELECT id FROM category WHERE name = "${item.type}" LIMIT 1), ${item.capacity}, "${item.color}", "${item.thumbnail}", "${item.description}", ${item.price})`,(err)=>{
        if(err) {
            console.log(err);
            return;
        }
    });
});
// <<---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->>