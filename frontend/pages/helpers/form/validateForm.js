import {errors} from './errors/errorTypes.js'

export const validateForm = (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[type='text']")
  
    const inputsArray = Array.from(inputs)

    const sendButton = document.querySelector('.send')

    // disablear el boton
  
    let dataInput = []
  
    inputsArray.map((input)=>{

      const alertValidate = document.querySelector(`label[for=${input.id}]`)
  
      if (input.value.length === 0){
  
        input.style.borderColor = "#EF5350"

        alertValidate.innerHTML = empty

        alertValidate.style.color = "#EF5350"

        alertValidate.style.display = 'flex'

        // ubicar un mensaje , tengo que recuperar la validacion, tal vez cambiando el id con un "ok"
  
        // cuando esas dos condiciones se cumplan, entonces se hace la insercion de la data
      }else{

        const validate = Boolean(input.getAttribute('data-validate'))

        if (validate){

          console.log(dataInput.includes(input.value))

          if (!dataInput.includes(input.value)){

              dataInput.push(input.value)

              console.log(dataInput)
          }}
    } })

    if(dataInput.length === 5){

      console.log('se puede enviar los datos')

    }
  }
  
  