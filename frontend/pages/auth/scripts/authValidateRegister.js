import {errors} from '../../helpers/form/errors/errorTypes.js'
import { setForm } from '../../helpers/form/setForm.js'
import { loginRedirect } from '../api/loginRedirect.js'
import {sendRegister} from "../api/sendRegister.js"



export const authValidateRegister = (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[data-form='register']")
  
    const inputsArray = Array.from(inputs)

    const messageSendForm = document.querySelector("label[for=send]")

    const button = document.getElementById('send');
  
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

        dataInput[input.id] = input.value

        if (validate){

          if (!Object.values(dataInput).includes(input.value)){

              dataInput[input.id] = input.value 
          }}

    } })

    if(Object.values(dataInput).length === inputsArray.length){

      button.innerHTML = '<span class="loader"></span> Register and Login...'
   
      const response = sendRegister(dataInput)

      response.then((res) => {

        if(res.status){

          loginRedirect()
        
        }else{

          console.log(res.status)

          messageSendForm.innerHTML = res.message
          messageSendForm.style.display = "flex"
          messageSendForm.style.color = "red"
          button.innerHTML = '<i class="fa-solid fa-x"></i>'
          setForm(inputsArray, messageSendForm, button)
        }
       }
        ).
       catch(error => {throw new Error(error)})
    }
  }
  