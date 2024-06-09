import express from 'express'
import { router } from '../routes/routes.js'
import cors from 'cors'

export const server = () => {

    const app = express()

    app.use(cors())

    app.use(express.json());

    app.use('/api', router)

    return app
}
