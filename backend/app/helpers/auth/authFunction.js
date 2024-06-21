import { getUserByEmail, registerUser } from "../db/dbQuerys.js";
import { createToken } from "./jwt/createToken.js";

export const onRegister = async (data) => {

    console.log(data)
   
    try { 
   
       const user =  await getUserByEmail(data.email);
       
       if (user !== undefined) {
     
           return ({status:false,  id:"email", message:'Este correo electrónico ya está en uso'});
       }
   
       const register = await registerUser(data)

       if(register){

        const token = createToken(data.name, data.surname)

        return({status:true, token:token, message:"Usuario registrado"})

       }
       
    } catch (error) {
       throw new Error(`Error en el registro del usuario: ${error}`);
    }
    };
   
   
export const onlogin = async (data) => {

       try {
           const { email, password } = data;

           const user = await getUserByEmail(email);
        
           if (user) {
               if (password === user.password) {
                    
                    const token = createToken(user.nombre, user.apellido)

                   return ({status:true, token}); // Contraseña correcta
               } else {
                   return({status:false, id:"password", message:"Contraseña incorrecta"});
               }
           } else {
               return({status:false, id:"email", message:"Email incorrecto"});
           }
       } catch (error) {
           throw new Error("Error en el logeo: " + error.message);
       }
   };
   