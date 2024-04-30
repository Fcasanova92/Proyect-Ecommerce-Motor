import {errors} from './errors/errorTypes.js'

import { sendForm } from './api/sendForm.js'

export const validateForm = (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[type='text']")
  
    const inputsArray = Array.from(inputs)

    const messageSendForm = document.querySelector("label[for=send]")

    const button = document.getElementById('send');
  
    let dataInput = []
  
    inputsArray.map((input)=>{

      const alertValidate = document.querySelector(`label[for=${input.id}]`)
  
      if (input.value.length === 0){
  
        input.style.borderColor = "#EF5350"

        alertValidate.innerHTML = empty

        alertValidate.style.color = "#EF5350"

        alertValidate.style.display = 'flex'

      }else{

        const validate = Boolean(input.getAttribute('data-validate'))

        dataInput.push(input.value)

        if (validate){

          console.log(dataInput.includes(input.value))

          if (!dataInput.includes(input.value)){

              dataInput[input.id] = input.value 
          }}
    } })

    if(dataInput.length === 5){

      button.innerHTML = '<span class="loader"></span> Enviando...'
   
      const response = sendForm(dataInput)

       response.then((res) => {

        if(res.status){
          
          messageSendForm.innerHTML = res.message
          messageSendForm.style.display = "flex";
          messageSendForm.style.color = "green";
          button.innerHTML = "Enviado"
       
        }
       }
        ).
       catch(error => console.log(error))
    }
  }
  
  