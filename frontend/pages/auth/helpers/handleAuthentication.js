import { loginRedirect } from "./loginRedirect.js"
import { resetButtonState, updateButtonState } from "./styleButton.js"
import { styleErrorField } from "./styleErrorField.js"


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
