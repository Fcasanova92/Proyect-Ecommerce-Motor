// endpoints para obtener productos
import { Router } from 'express';
import { validateToken } from '../../../helpers/auth/jwt/middleware/validateToken.js';
import { getLikeProductByIdUser } from '../../../helpers/likes/getLikeProductByIdUser.js';

export const router = Router();

router.get('/product-likes', validateToken, async function(req, res) {

  const idUser = req.user.id

  try {

    const dataProduct = await getLikeProductByIdUser(idUser)

    if(dataProduct.length > 0){

      return res.status(200).json({data:dataProduct})
    }
    
    return res.status(401).send("el usuario no tiene productos favoritos")
    
  } catch (err) {

    console.log(err)

    return res.status(500).send(`${err}`)
    
  }
  
  
});

