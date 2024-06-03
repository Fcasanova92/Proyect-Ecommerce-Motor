// funciones para interactuar con la base de datos, dependientes de los parametros necesarios en las rutas de la aplicacion

import { getConnection } from "../../db/dbConnection.js"

export const registerUser = async (data) => {

    const {nombre, apellido, email, password} = data;

    const db = getConnection();

    try {
        const user = await getUserByEmail(db, email);
        if (user) {
            throw new Error('El usuario ya existe');
        }

        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [nombre, apellido, email, password], (err) => {
                if (err) {
                    return reject(`Error en el registro del usuario: ${err}`);
                }
                resolve(true);
            });
        });
    } catch (error) {
        return Promise.reject(`Error en el registro del usuario: ${error}`);
    }};


const getUserByEmail = (db, email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};
