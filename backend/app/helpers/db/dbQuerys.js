// funciones para interactuar con la base de datos, dependientes de los parametros necesarios en las rutas de la aplicacion

export const getUserByEmail = async (db, email) => {
   
    try {
        const result = db.query('SELECT * FROM users WHERE email = ?', [email]);
        return result;

    } catch (error) {
        throw new Error("Error en la búsqueda del registro: " + error.message);
    }
    };

export const registerUser = async (db, data)=>{

    const { nombre, apellido, email, password } = data

    const result = db.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [nombre, apellido, email, password]);

    if (result.error) {
        throw new Error(`Error en la conexión a la base de datos: ${result.error}`);
    }

    return true;
}
