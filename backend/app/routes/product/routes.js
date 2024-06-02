// endpoints para obtener productos
import { Router } from 'express';

export const router = Router();


// define the home page route
router.post('/register', function(req, res) {
  res.send('register endpoint');
});
// define the about route
router.post('/login', function(req, res) {
  res.send('login endpoint');
});
