import jwt, { decode } from 'jsonwebtoken'
import {config} from 'dotenv'
import { decodedToken } from '../helpers/decodedToken';

config()

export const validateToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Token no provisto o mal formado' });
  }

  try {
    const decoded = decodedToken(token);
    req.user = { username: decoded.name, surname: decoded.surname }; // Extract user details
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token no válido' });
  }
  };
