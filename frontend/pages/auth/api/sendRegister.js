import {users} from "../db/user.js"

var idUser = 0

export const sendRegister = async (data) => {

    const message = `Registro realizado correctamente`

    try{

      const send = await axios.post('https://jsonplaceholder.typicode.com/posts', consulta, {
      headers: {

        'Content-Type': 'application/json'

      }
,
    })

    if (send.request.status >= 200 && send.request.status < 300){

      idUser += 1

      users[idUser] = {

        "name":"",

        "username":"",

        "email":"",

        "password":""
        
      }

      return {status:true, message}

    }else{

      throw new Error(`Error al enviar el formulario. Código de estado: ${response.status}`)
    }

    }catch(error){

      return (`Error al enviar el formulario: ${error.message}`)
    }
  }