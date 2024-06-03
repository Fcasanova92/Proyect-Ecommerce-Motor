// funciones para interactuar con la base de datos, dependientes de los parametros necesarios en las rutas de la aplicacion

export const getUserByEmail = (db, email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

export const registerUser = async (db, data)=>{

    const { nombre, apellido, email, password } = data

    const result = await db.query('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)', [nombre, apellido, email, password]);

    if (result.error) {
        throw new Error(`Error en la conexión a la base de datos: ${result.error}`);
    }

    return { status: true, message: 'Usuario registrado' };
}
