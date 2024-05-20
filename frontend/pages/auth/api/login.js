import {users} from '../../../db/users.js'

export const login = async (email, password) => {

    try{
        const response =  await new Promise((resolve, reject) => {

            users.map((user)=>{

                setTimeout(() => {

                    if(email === user.email && user.password === password){
            
                        sessionStorage.setItem('sesion', 'activa');
                
                        resolve ({status:200, message:"Bienvenido a MotorShop"})
                    }
            
                    reject({status:401, message:"Email o Password invalido"})
                    
                }, 3000)

            })
         })

        return response
    }
    catch (error) {
        return error;
    }
}