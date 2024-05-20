import {users} from '../../../db/users.js'

export const sendRegister = async (data) => {

  const email = data[2]

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.email !== email){

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
  
        throw new Error(`Error al enviar el formulario. Código de estado: ${response.status}`)
      }
  
      }catch(error){
  
        return (`Error al enviar el formulario: ${error.message}`)
      }

    }else{

      return {status:false, message: "El email se encuentra registrado"}
    }
    
  }
}