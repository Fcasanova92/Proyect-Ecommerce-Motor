
export const login = async (data) => {

    try{

        const response =  await axios.post("http://127.0.0.1:3000/api/auth/login", data, {

            'Content-Type': 'application/json'
        })

        const {token} = response.data

        if (response.status >= 200 && response.status < 300){
        
            sessionStorage.setItem('token', token);
                
            return {status:true, message:"Bienvenido a MotorShop"}
        }
      
          } catch (error) {
            
            if(error.response.status === 401){

                return {status:false, id:error.response.data.id , message:error.response.data.message}
            }
        }
    }
        
