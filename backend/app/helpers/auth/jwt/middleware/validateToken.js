import jwt, { decode } from 'jsonwebtoken'
import {config} from 'dotenv'

config()

export const validateToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Token no provisto o mal formado' });
  }

  const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.sendStatus(401);
    }
    
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = { username: decoded.username }; // Extrae el nombre de usuario
      next();
    } catch (err) {
      return res.status(403).json({ message: 'Token no válido' });
    };
  };