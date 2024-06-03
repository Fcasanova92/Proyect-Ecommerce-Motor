// funciones para interactuar con la base de datos, dependientes de los parametros necesarios en las rutas de la aplicacion

import { getConnection } from "../../db/dbConnection.js"

export const registerUser = async (data) => {const { nombre, apellido, email, password } = data;

 const db = getConnection();

 try { 
    const user = await getUserByEmail(db, email);
    
    if (user) {
        return ({status:false, message:'El usuario ya existe'});
    }

    const result = await db.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [nombre, apellido, email, password]);

    if (result.error) {
        throw new Error(`Error en la conexión a la base de datos: ${result.error}`);
    }

    return { status: true, message: 'Usuario registrado' };
    
 } catch (error) {
    throw new Error(`Error en el registro del usuario: ${error}`);
 }
 };


 export const loginUser = async (data) => {
    try {
        const { email, password } = data;

        const user = await getUserByEmail(email);

        if (user) {
            if (password === user.password) {
                return ({status:true, message:"Bienvenido"}); // Contraseña correcta
            } else {
                return({status:false, message:"Contraseña incorrecta"});
            }
        } else {
            return({status:false, message:"Email incorrecto"});
        }
    } catch (error) {
        throw new Error("Error en el logeo: " + error.message);
    }
};


const getUserByEmail = (db, email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};
