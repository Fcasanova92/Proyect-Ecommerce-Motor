
import { dbConnection } from "./app/db/dbConnection.js";
import { server } from "./app/server/server.js";
import { config } from 'dotenv';

config()

const port = process.env.PORT

dbConnection()

const app =  server()

app.listen(port, ()=> console.log(`Open your browser and visit: http://localhost:${port}/`))