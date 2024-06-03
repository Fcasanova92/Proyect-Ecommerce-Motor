import {dbConfig} from './dbConfig.js'

import mysql from 'mysql'

let connection;

export const dbConnection = () => {

    connection = mysql.createConnection(dbConfig);
    
    connection.connect((error)=>{
    
        if(error){
    
            throw Error('error al conectar la base de datos :' + error)
        }
    
        console.log('Servidor de base de datos correctamente conectado')
    
    })

    connection.on('error', (err) => {
        console.error('Error en la conexión a la base de datos:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectToDatabase(); // Reconecta automáticamente si se pierde la conexión
        } else {
            throw err;
        }
    })

    }

export const getConnection = () => {
        if (!connection) {
            throw new Error('No database connection available');
        }
        return connection;
    };



