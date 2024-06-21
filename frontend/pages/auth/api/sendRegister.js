
export const sendRegister = async (data) => {

      try{

        const response = await axios.post("http://127.0.0.1:3000/api/auth/register", data, {
        headers: {
  
          'Content-Type': 'application/json'
  
        }
  ,
      })

      const {token, message} = response.data
  
      if (response.status >= 200 && response.status < 300){

        sessionStorage.setItem("token", token)
        
        return {status:true, message}
  
      }
      
      }catch(error){
  
        if (error.response) {

   
          if (error.response.status === 409) {
    
              return { status: false, id: error.response.data.id , message: error.response.data.message};
      }

    }}

  }
    