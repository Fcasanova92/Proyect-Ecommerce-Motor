import express from 'express'
import { router } from '../routes/routes.js'

export const server = () => {

    const app = express()

    app.use('/api', router)

    return app
}
