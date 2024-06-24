// endpoints para obtener productos
import { Router } from 'express';
import { validateToken } from '../../../helpers/auth/jwt/middleware/validateToken';

export const router = Router();

router.get('/product-likes', validateToken, async function(req, res) {
  const idUser = req.user.id
  try {

    const dataProduct = await getLikeProductByIdUser(idUser)

    if(dataProduct){

      return res.status(200).json({dataProduct})
    }
    
    return res.status(401).send("el usuario no tiene productos favoritos")
    
  } catch (error) {

    throw new error
    
  }
  
  
});

