import {regexValidate} from './regex/regexValidate.js'

export const validateField = (regex, value, error, alertValidate, inputSelected)=> {

    if(regexValidate(regex, value)){
            
        alertValidate.style.display = "none";
    
        inputSelected.setAttribute('data-validate', 'true');

        inputSelected.style.borderColor = 'black';
      
      }else{

        alertValidate.innerHTML = error
    
        alertValidate.style.display = "flex";
      
        alertValidate.style.color = "#EF5350";

        inputSelected.style.borderColor = "#EF5350";
      
        inputSelected.setAttribute('data-validate', 'false');
  
      }

}

