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


router.post('/get-likes', validateToken, async function(req, res) {

  const idUser = req.user.id

  const id_product = req.body.id

  try {

    const resultSave = await getLikeProductByIdUser(idUser, id_product)

    if(resultSave.status){

      return res.status(200).json({message: resultSave.message})
    }

    else{

      return res.status(404).json({message: resultSave.message})
    }

  }catch (err) {

    console.log(err)

    return res.status(500).send(`${err}`)
    
  }})
  


