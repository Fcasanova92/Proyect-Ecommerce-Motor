// endpoints para obtener productos
import { Router } from 'express';

export var router = Router();


// define the home page route
router.post('/register', function(req, res) {
  res.send('register endpoint');
});
// define the about route
router.get('/login', function(req, res) {
  res.send('login endpoint');
});
