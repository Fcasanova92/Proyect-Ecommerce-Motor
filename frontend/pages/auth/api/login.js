export const login = async (email, password) => {

    try{
        const response =  await new Promise((resolve, reject) => {

            const userDb = {email:"ferprofe92@gmail.com", password:"asdasd!93!M"}
            
            setTimeout(() => {

                if(email === userDb.email && userDb.password === password){
        
                    sessionStorage.setItem('sesion', 'activa');
            
                    resolve ({status:200, message:"Bienvenido a MotorShop"})
                }
        
                reject({status:401, message:"Email o Password invalido"})
                
            }, 3000);
    
        })

        return response
    }
    catch (error) {
        return error;
    }
}