import express from 'express'
import { router } from '../routes/routes.js'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors'

export const server = () => {

    const __filename = fileURLToPath(import.meta.url);

    const __dirname = dirname(__filename);


    const app = express()

    app.use(cors())

    app.use(express.json());

// Middleware para servir archivos estáticos desde 'public'
app.use(express.static(join(__dirname, '../../public'), {
    // Configurar tipos MIME para archivos específicos
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        } else if (path.endsWith('.png')) {
            res.set('Content-Type', 'image/png');
        }
        // Agregar más tipos MIME según sea necesario
    }
}));

app.use('/api', router)
        
    app.get('/registro', (req, res) => {
        res.sendFile(join(__dirname, '../../public/pages/auth', 'register.html'));
      });
      
      app.get('/login', (req, res) => {
        res.sendFile(join(__dirname, '../../public/pages/auth', 'login.html'));
      });
      
      app.get('/favoritos', (req, res) => {
        res.sendFile(join(__dirname, '../../public/like', 'like.html'));
      });
      
      app.get('/*', (req, res) => {
        res.sendFile(join(__dirname, '../../public', 'index.html'));
      });

    return app
}
