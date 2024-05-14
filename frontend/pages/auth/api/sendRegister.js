import {addUser} from "../db/user.js"

export const sendRegister = async (data) => {

  console.log(data)

    const message = `Registro realizado correctamente`

    try{

      const send = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
      headers: {

        'Content-Type': 'application/json'

      }
,
    })

    if (send.request.status >= 200 && send.request.status < 300){

      addUser(data)
      
      return {status:true, message}

    }else{

      throw new Error(`Error al enviar el formulario. Código de estado: ${response.status}`)
    }

    }catch(error){

      return (`Error al enviar el formulario: ${error.message}`)
    }
  }