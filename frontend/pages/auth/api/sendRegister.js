
export const sendRegister = async (data) => {

      try{

        const send = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
        headers: {
  
          'Content-Type': 'application/json'
  
        }
  ,
      })
  
      if (send.request.status >= 200 && send.request.status < 300){
        
        return {status:true}
  
      }else{
  
        return {status:true}
      }
  
      }catch(error){
  
        return (`Error al enviar el formulario: ${error.message}`)
      }

    }
    