import { server } from "./server/server.js";
import { config } from 'dotenv';

const port = process.env.PORT

const app =  server()

app.listen(port, ()=>{console.log(`Servidor Express escuchando en el puerto ${port}`)})