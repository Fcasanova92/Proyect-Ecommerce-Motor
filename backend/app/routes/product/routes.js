// endpoints para obtener productos
import { Router } from 'express';
import { registerUser } from '../../helpers/db/dbQuerys.js';

export const router = Router();


// define the home page route
router.post('/register', function(req, res) {
  data = req.body
  const registerUser = registerUser(data)
  res.send('register endpoint');
});
// define the about route
router.post('/login', function(req, res) {
  res.send('login endpoint');
});
