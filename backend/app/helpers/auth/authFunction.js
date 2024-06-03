import { getUserByEmail, registerUser } from "../db/dbQuerys.js";

export const onRegisterUser = async (data) => {
    
    const db = getConnection();
   
    try { 
   
       const user = await getUserByEmail(db, email);
       
       if (user) {
           return ({status:false, message:'El usuario ya existe'});
       }
   
       return await registerUser(db, data)
       
    } catch (error) {
       throw new Error(`Error en el registro del usuario: ${error}`);
    }
    };
   
   
    export const onloginUser = async (data) => {
       try {
           const { email, password } = data;
   
           const db = getConnection();
   
           const user = await getUserByEmail(db, email);
   
           if (user) {
               if (password === user.password) {
                   return ({status:true, message:"Bienvenido"}); // Contraseña correcta
               } else {
                   return({status:false, message:"Contraseña incorrecta"});
               }
           } else {
               return({status:false, message:"Email incorrecto"});
           }
       } catch (error) {
           throw new Error("Error en el logeo: " + error.message);
       }
   };
   