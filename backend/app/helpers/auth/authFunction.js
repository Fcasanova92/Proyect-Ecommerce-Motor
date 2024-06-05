import { getUserByEmail, registerUser } from "../db/dbQuerys.js";

export const onRegister = async (data) => {
   
    try { 
   
       const user =  await getUserByEmail(data.email);
       
       if (user !== undefined) {
           return ({status:false, message:'El usuario ya existe'});
       }
   
       const register = await registerUser(data)


       if(register){

        return({status:true, message:"Usuario registrado"})

       }
       
    } catch (error) {
       throw new Error(`Error en el registro del usuario: ${error}`);
    }
    };
   
   
export const onlogin = async (data) => {
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
   