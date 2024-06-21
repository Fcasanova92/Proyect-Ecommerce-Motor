import { errors } from "./errors/errorTypes.js"


export const validateForm = (event) => {

    event.preventDefault()

    const formType = event.target.getAttribute("data-id")

    const inputsArray = Array.from(document.querySelectorAll(`input[type='text'][data-form='${formType}']`))

    fieldRequiredOnClick(inputsArray)

    const data = getValidateDataForm(inputsArray)

    if(data){

      return {data, type:formType, inputsArray}
    }
   
  }

export const getValidateDataForm = (inputsArray) => {
  
    let dataInput = {}
  
    inputsArray.map((input)=>{

      const validateInput = JSON.parse(input.getAttribute('data-validate'))
  
      if (validateInput){

        dataInput[input.id] = input.value 
       
      }
    })

    
    if(Object.values(dataInput).length === inputsArray.length){

      return dataInput
    }
}


export const fieldRequiredOnClick = (inputsArray) => {

  const {empty} = errors

  inputsArray.map((input)=>{

    const {id, value} = input

    console.log(id, value)

    const alertValidate = document.querySelector(`label[for=${id}]`)

    if (value.length === 0){

      input.style.borderColor = "#EF5350"

      input.setAttribute('data-validate', 'false');

      alertValidate.innerHTML = empty

      alertValidate.style.color = "#EF5350"

      alertValidate.style.display = 'flex'
     
    }
  })

}

  


  // const messageSendForm = document.querySelector("label[for=send]")

  // const button = document.getElementById('send');

  // if(dataInput.length === inputsArray.length){

  //   button.innerHTML = '<span class="loader"></span> Enviando...'
 
  //   const response = sendForm(dataInput)

  //   response.then((res) => {

  //     if(res.status){

  //       messageSendForm.innerHTML = res.message
  //       messageSendForm.style.display = "flex";
  //       messageSendForm.style.color = "green";
  //       button.innerHTML = "Enviado"
  //       setForm(inputsArray, messageSendForm, button)
     
  //     }
  //    }
  //     ).
  //    catch(error => console.log(error))
  // }
  
  