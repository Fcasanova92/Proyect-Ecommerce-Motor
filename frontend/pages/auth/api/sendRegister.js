import {addUser} from "../db/userMethods.js"

export const sendRegister = async (data) => {

    try{

      const send = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
      headers: {

        'Content-Type': 'application/json'

      }
,
    })

    if (send.request.status >= 200 && send.request.status < 300){

      addUser({
        name:data[0],
        surname:data[1],
        email:data[2],
        password:data[3]
      })
      
      return {status:true}

    }else{

      throw new Error(`Error al enviar el formulario. Código de estado: ${response.status}`)
    }

    }catch(error){

      return (`Error al enviar el formulario: ${error.message}`)
    }
  }