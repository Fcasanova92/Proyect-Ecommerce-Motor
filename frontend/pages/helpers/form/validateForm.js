import {errors} from './errors/errorTypes.js'

import { sendForm } from './api/sendForm.js'

export const validateForm = (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[type='text']")
  
    const inputsArray = Array.from(inputs)
  
    let dataInput = {}
  
    inputsArray.map((input)=>{

      const alertValidate = document.querySelector(`label[for=${input.id}]`)
  
      if (input.value.length === 0){
  
        input.style.borderColor = "#EF5350"

        alertValidate.innerHTML = empty

        alertValidate.style.color = "#EF5350"

        alertValidate.style.display = 'flex'

      }else{

        const validate = Boolean(input.getAttribute('data-validate'))

        if (validate){

          console.log(dataInput.includes(input.value))

          if (!dataInput.includes(input.value)){

              dataInput[input.id] = input.value 

              console.log(dataInput)
          }}
    } })

    if(dataInput.length === 5){

      sendForm(dataInput)

    }
  }
  
  