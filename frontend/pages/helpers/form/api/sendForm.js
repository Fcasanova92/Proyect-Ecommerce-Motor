export const sendForm = async (data) => {

    const message = `${data[0]} ${data[1]} responderemos tu consulta en breve`

    const consulta = {

      nombre: data[0],

      surname: data[1],

      consulta: data[4]
    }

    try{

      const sendEmail = await axios.post('https://jsonplaceholder.typicode.com/posts', consulta, {
      headers: {

        'Content-Type': 'application/json'

      },
    })

    console.log(sendEmail)

    if (sendEmail.request.status >= 200 && sendEmail.request.status < 300){

      return {status:true, message}

    }else{

      throw new Error(`Error al enviar el formulario. Código de estado: ${response.status}`)
    }

    }catch(error){

      return (`Error al enviar el formulario: ${error.message}`)
    }
  }