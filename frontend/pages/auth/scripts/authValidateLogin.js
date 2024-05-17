import {errors} from '../../helpers/form/errors/errorTypes.js'
import { login } from '../api/login.js'

import {sendRegister} from "../api/sendRegister.js"


export const authValidateLogin = (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[data-form='register']")
  
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

          if (!dataInput.includes(input.value)){

              dataInput[input.id] = input.value 
          }}
    } })

    if(dataInput.length === inputsArray.length){

      button.innerHTML = '<span class="loader"></span> Enviando...'
   
      const response = sendRegister(dataInput)


      response.then((res) => {

        if(res.status){

          button.innerHTML = '<span class="material-symbols-outlined" size="41">check</span>'
          button.style.backgroundColor ="green"
          login()

        }
       }
        ).
       catch(error => console.log(error))
    }
  }
  