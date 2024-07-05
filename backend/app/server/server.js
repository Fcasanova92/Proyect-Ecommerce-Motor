import express from 'express'
import { router } from '../routes/routes.js'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors'

export const server = () => {

    const __filename = fileURLToPath(import.meta.url);

    console.log(__filename)
    const __dirname = dirname(__filename);
    console.log(__dirname)

    const app = express()

    app.use(cors())

    app.use(express.json());

// Middleware para servir archivos estáticos desde 'public'
    app.use(express.static(join(__dirname, '../../public')));

    app.get('/registro', (req, res) => {
        res.sendFile(join(__dirname, '../../public/pages/auth', 'register.html'));
      });
      
      app.get('/login', (req, res) => {
        res.sendFile(join(__dirname, '../../public/pages/auth', 'login.html'));
      });
      
      app.get('/favoritos', (req, res) => {
        res.sendFile(join(__dirname, '../../public/like', 'like.html'));
      });


    app.get('/index', (req, res) => {
        res.sendFile(join(__dirname, '../../public', 'index.html'));
      });

    app.use('/api', router)

    return app
}
