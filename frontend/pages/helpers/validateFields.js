import {regexValidate} from './regexValidate.js'

import {regexTypes} from './regexTypes.js'

export const validateField = ({target}) => {

    const {id, value} = target

    const {text, telephone, email} = regexTypes

    let alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
         
          regexValidate(email, alertValidate, value)
          break;

        case "telephone":
        
          regexValidate(telephone, alertValidate, value)
          break;
    
        default:
            
          regexValidate(text, alertValidate, value)
          break;
    }
}

export const validateForm = (event) => {

  event.preventDefault()

  const inputs = document.querySelectorAll("input[type='text']")

  const inputsArray = Array.from(inputs)

  let dataInput = []

  inputsArray.map((input)=>{

    console.log(input.value.trim())

    if (input.value.length === 0){

      // ubicar un mensaje , tengo que recuperar la validacion, tal vez cambiando el id con un "ok"

      // cuando esas dos condiciones se cumplan, entonces se hace la insercion de la data

    }

    dataInput.push(input.value)

  })

}


