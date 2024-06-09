import { Router } from 'express';
import { onRegister, onlogin } from '../../helpers/auth/authFunction.js';

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

    const user = await onlogin(data)

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
