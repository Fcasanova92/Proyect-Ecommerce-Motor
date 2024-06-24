import { getIdProductLikes } from "../db/dbQuerys"


export const getLikeProductByIdUser = async (id) => {

    const userId = id

    const data = await getIdProductLikes(userId)
    
    return data


}