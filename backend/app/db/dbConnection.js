import {dbConfig} from './dbConfig.js'

import mysql from 'mysql'

export const dbConnection = () => {

    const connection = mysql.createConnection(dbConfig);
    
    connection.connect((error)=>{
    
        if(error){
    
            throw Error('error al conectar la base de datos :' + error)
        }
    
        console.log('Base datos Mysql correctamente conectada')
    
    })

    return connection

    }

