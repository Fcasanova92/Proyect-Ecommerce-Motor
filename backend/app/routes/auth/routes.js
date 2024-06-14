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

router.get('/protected', validateToken, async function(req, res) { 

  try {

    return res.status(200).json({username : req.user.username, surname:req.user.surname})
    
  } catch (error) {

    console.log(error)

    if(error.response.status === 403)

    return res.status(403).json("dont token provider")
    
  }
  
});

