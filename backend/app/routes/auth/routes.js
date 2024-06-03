import { Router } from 'express';
import { registerUser } from '../../helpers/db/dbQuerys.js';

export const router = Router();


// define the home page route
router.post('/register', async function(req, res) {

  console.log(req.body)
  const data = req.body
  console.log(data)
  const user = await registerUser(data)
  if(user){

    res.send("usuario registrado")
  }
});
// define the about route
router.get('/login', function(req, res) {
  res.send('login endpoint');
});
