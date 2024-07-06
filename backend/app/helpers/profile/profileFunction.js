import {comparePassword} from '../auth/bycs/comparePassword.js'
import {updatePasswordDatabase} from '../db/dbQuerys.js'
import {getUserByID} from '../db/dbQuerys.js'

export const updateUserPassword = async (idUser, oldPassword, newPasword) => {

    console.log("estoy dentro de updateUserPassword",oldPassword, newPasword)

    const user = await getUserByID(idUser)


    try {
        const checkedPassword = await comparePassword(oldPassword, user.password)
     
            if (checkedPassword) {
                 
                const updatePassword = updatePasswordDatabase(id, newPasword)

                console.log(updatePassword)

                return ({status:true}); // Contraseña correcta
            } else {
                return({status:false, fieldError:"password", message:"Contraseña no corresponde al perfil"});
            }
        } 
    
        catch (error) {
        throw new Error("Error: " + error.message);
    }
};