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

    const { nombre, apellido, email, password } = data

    return new Promise((resolve, reject)=>{

        pool.getConnection((err, connection) => {
            if (err) {
              reject(new Error("Error en la conexión: " + err.message));
              return;
            }
      
            connection.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [nombre, apellido, email, password], (error, results) => {
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

