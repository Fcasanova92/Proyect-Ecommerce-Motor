import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()

export const decodedToken = (token) => {

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return decoded
  
    } catch (err) {
      return res.status(403).json({ message: 'Token no válido' });
    };
  };