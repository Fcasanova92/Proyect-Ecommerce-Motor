import { Router } from 'express';
import { onRegister, onlogin } from '../../helpers/auth/authFunction.js';
import { validateToken } from '../../helpers/auth/jwt/middleware/validateToken.js';

export const router = Router();


// define the home page route
router.post('/register', async function(req, res) {

  try {

    const data = req.body

    const user = await onRegister(data)

    if(user.status){

      res.status(200).json({message:user.message})
    }else{

      res.status(409).json({message:user.message})
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  
});
// define the about route
router.post('/login', async function(req, res) {

  try {

    const data = req.body

    const {status, message, token} = await onlogin(data)

    if(status){
      res.status(200).json({token})
    }else{

      res.status(409).json({message})
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  
});

router.post('/protected', validateToken, async function(req, res) { 

  res.send(`Hola ${req.user.username}, tienes acceso a esta ruta protegida`)
  
});

