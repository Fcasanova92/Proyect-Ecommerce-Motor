import {errors} from '../../helpers/form/errors/errorTypes.js'
import { login } from '../api/login.js'
import {setForm} from '../../helpers/form/setForm.js'

export const authValidateLogin = async (event) => {

    event.preventDefault()

    const {empty} = errors
  
    const inputs = document.querySelectorAll("input[data-form='login']")
  
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

      const email = dataInput[0]
      const password = dataInput[1]

      login(email, password).then((res)=>{

        console.log(res.status)

        if(res.status === 200){

          button.innerHTML = '<span class="material-symbols-outlined" size="41">check</span>'
          button.style.backgroundColor ="green"
                 // Redirigir a la página de inicio
          window.location.href = '../../pages/index.html';
   
        }else{

         button.innerHTML = '<span class="material-symbols-outlined" size="41">close</span>'
         messageSendForm.innerHTML = res.message
         messageSendForm.style.display = "flex"
         setForm(inputsArray, messageSendForm, button)
        }
      
   })
      }

  }
  