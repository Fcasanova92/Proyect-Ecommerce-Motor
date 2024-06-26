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
      
              resolve(results);
            });
          });
        });

    }
    //Traer todos los produtos
    export const getAllItems = async (offset, limit) => {
      return new Promise((resolve,reject) => {
        const query = 'SELECT * FROM product LIMIT ? OFFSET ?'
        pool.getConnection((error,connection) => {
          if(error){
            reject(new Error(`Error en la conexión: ${error.message}`));
            return;
          }
          connection.query(query, [limit, offset] , (error,results) => {
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
    export const getItemsByFilter = async (filters) => {

      const {brand, capacity, color, price} = filters

      const filtersValues = Object.values(filters)

      // dependiendo de los filtros se anaden dinamicamente a la query

      let query = 'SELECT * FROM product WHERE 1=1 '

      if(brand){

        query += ' AND brand = ?'
      }

      if(capacity){

        query +=  ' AND capacity = ?'
      }
      if(color){

        query += ' AND color = ?'
      }

      if(price){

        query += ' AND price = ?'
      }

      return new Promise((resolve,reject)=>{
        pool.getConnection((error,connection)=>{
          if(error){
            reject(new Error(`Error en la conexión: ${error.message}`));
            return;
          }

          // se pasan directamente los filtros, de esa manera evitamos dependencia directa

          connection.query(query, filtersValues, (error,results) => {
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
    
          connection.query('SELECT * FROM likes WHERE user_id = ?', [id], (error, results) => {
            connection.release(); // Libera la conexión de vuelta al pool
    
            if (error) {
              reject(new Error("Error en la consulta: " + error.message));
              return;
            }
           
            resolve(results || []);
            
          });
        });
      });
    }

    export const saveLikeProduct = (product_id, user_id) => {

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
