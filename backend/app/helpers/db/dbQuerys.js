// funciones para interactuar con la base de datos, dependientes de los parametros necesarios en las rutas de la aplicacion

import { pool } from "../../db/dbPool.js";

export const getUserByEmail = (email) => {

    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) {
            reject(new Error("Error en la conexión: " + err.message));
            return;
          }
    
          connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
            connection.release(); // Libera la conexión de vuelta al pool
    
            if (error) {
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }
    
            resolve(results[0]);
          });
        });
      });
    };

export const registerUser = async (data)=>{

    const { name, surname, email, password } = data

    return new Promise((resolve, reject)=>{

        pool.getConnection((err, connection) => {
            if (err) {
              reject(new Error("Error en la conexión: " + err.message));
              return;
            }
      
            connection.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [name, surname, email, password], (error, results) => {
              connection.release(); // Libera la conexión de vuelta al pool
      
              if (error) {
                reject(new Error("Error en la consulta: " + error.message));
                return;
              }

              console.log(results)
      
              resolve(results);
            });
          });
        });

    }
    //Traer todos los produtos
    export const getAllItems = async () => {
      return new Promise((resolve,reject) => {
        pool.getConnection((error,connection) => {
          if(error){
            reject(new Error(`Error en la conexión: ${error.message}`));
            return;
          }
          connection.query('SELECT * FROM product', (error,results) => {
            connection.release();
            if(error){
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }
            resolve(results);
          });
        });
      });
    }
    //Traer solo los productos segun el filtro
    export const getItemsByFilter = async (brand,capacity,color,price) => {
      return new Promise((resolve,reject)=>{
        pool.getConnection((error,connection)=>{
          if(error){
            reject(new Error(`Error en la conexión: ${error.message}`));
            return;
          }
          connection.query('SELECT * FROM product WHERE (marca, cilindrada, color, precio) VALUES (?, ?, ?, ?)', [brand, capacity, color, price],(error,results) => {
            connection.release();
            if(error){
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }
            resolve(results);
          });
        });
      }); 
    }


    export const getIdProductLikes = (id) => {

      return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) {
            reject(new Error("Error en la conexión: " + err.message));
            return;
          }
    
          connection.query('SELECT * FROM product WHERE id = ?', [id], (error, results) => {
            connection.release(); // Libera la conexión de vuelta al pool
    
            if (error) {
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }

            resolve(results);
            
          });
        });
      });
    }

    export const saveLikeProduct = (product_id, user_id) => {

      console.log(product_id, user_id)

      return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) {
            reject(new Error("Error en la conexión: " + err.message));
            return;
          }
    
          connection.query('INSERT INTO likes (user_id, product_id) VALUES (?,?)', [product_id, user_id], (error, results) => {
            connection.release(); // Libera la conexión de vuelta al pool
    
            if (error) {
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }

            resolve(results);
            
          });
        });
      });
    }
