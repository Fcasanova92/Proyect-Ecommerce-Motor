
export const sendRegister = async (data) => {

      try{

        const response = await axios.post("http://127.0.0.1:3000/api/auth/register", data, {
        headers: {
  
          'Content-Type': 'application/json'
  
        }
  ,
      })
  
      if (response.status >= 200 && response.status < 300){
        
        return {status:true, message:response.data.message}
  
      }
      
      }catch(error){
  
        if (error.response) {
   
          if (error.response.status === 409) {
    
              return { status: false, message: error.response.data.message};
      }

    }}

  }
    