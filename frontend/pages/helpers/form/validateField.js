import {regexValidate} from './regex/regexValidate'

export const validateField = (regex, value, error, alertValidate, inputSelected)=> {

    if(regexValidate(regex, value)){ 
            
        alertValidate.style.display = "none"
    
        inputSelected.setAttribute('data-validate', 'true')
      
      }
    
      alertValidate.innerHTML = error
    
      alertValidate.style.display = "flex"
    
      alertValidate.style.display = "#EF5350"
    
      inputSelected.setAttribute('data-validate', 'false')
}

