
import { dbConnection } from "./db/dbConnection.js";
import { server } from "./server/server.js";
import { config } from 'dotenv';

config()

const port = process.env.PORT

dbConnection()

const app =  server()

app.listen(port, ()=>{console.log(`Servidor Express escuchando en el puerto ${port}`)})