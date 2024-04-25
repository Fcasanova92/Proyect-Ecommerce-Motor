export const validateForm = (event) => {

    event.preventDefault()
  
    const inputs = document.querySelectorAll("input[type='text']")
  
    const inputsArray = Array.from(inputs)
  
    let dataInput = []
  
    inputsArray.map((input)=>{
  
      if (input.value.length === 0){
  
        input.style.borderColor = "#EF5350"
  
        // ubicar un mensaje , tengo que recuperar la validacion, tal vez cambiando el id con un "ok"
  
        // cuando esas dos condiciones se cumplan, entonces se hace la insercion de la data
  
      }
      dataInput.push(input.value)
    })
  }
  
  