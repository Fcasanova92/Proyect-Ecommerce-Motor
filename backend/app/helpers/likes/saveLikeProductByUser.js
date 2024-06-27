import { saveLikeProduct } from "../db/dbQuerys"
import { getLikeProductByIdUser } from "./getLikeProductByIdUser"

export const saveLikeProductByUser = async (user_id, id_product) => {

    try{

        const productLikeUser = await getLikeProductByIdUser(user_id)

        productLikeUser.array.forEach(async (like) => {

            if(like.product_id === id_product && like.id_user === user_id){

                return {status:false, message:" el producto ya fue likeado"}
                
            }else{

                const saveLike = await saveLikeProduct(user_id, id_product)

                if(saveLike.idInsert){

                    return {status:true, message:"producto likeado"}
        
                }else{
        
                    return {status:false, message:"producto no likeado"}
                }


            }
            
        });

    }catch(error){

        throw new Error(error)
    }
   

}