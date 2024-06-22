
import { login } from '../api/login.js'
import {loginRedirect} from '../helpers/loginRedirect.js'
import { validateForm } from '../../helpers/form/validateForm.js'
import {register} from '../api/register.js'
import {styleErrorField} from '../helpers/styleErrorField.js'

export const authValidateAndRedirect = async (event) => {

    const formData= validateForm(event)

    if(formData){

      await handleAuthentication(formData)

    }

  }

export const handleAuthentication = async (formData)=> {

    const {data, type} = formData

    const button = document.getElementById("send")
  
    updateButtonState(button, type)

    try {

      const response = (type === "login") ? await login(data) : await register(data)

      setTimeout(async () => {

        button.disabled = true
        
        if(response.status ){
          loginRedirect()
  
   
        }else{

          
          const message = response.message

          const fieldIdError = response.id
  
          styleErrorField( message, fieldIdError, type, button)

        }
      }, 3000);
      
      
    } catch (error) {

      console.error('Error during login:', error);
      

    }finally{

      resetButtonState(button, type)

    }

 }


const updateButtonState = (button, type) =>{

  button.innerHTML = `<span class="loader"></span> ${(type === "login") ? "Login ... " : " Register and Login ..."}`

  button.disabled = true

}

const resetButtonState = (button, type) => {

  button.innerHTML = `<span class="loader"></span> ${(type === "login" ? "Login" : "Register")}`

  button.disabled = false
}

  