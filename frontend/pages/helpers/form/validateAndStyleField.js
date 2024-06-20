import {regexValidate} from './regex/regexValidate.js'


export const validateAndStyleField = (regex, value, error, alertValidate, inputSelected, empty)=> {

    if(value.length === 0){

      inputSelected.style.borderColor = "#EF5350"

        inputSelected.setAttribute('data-validate', 'false');

        alertValidate.innerHTML = empty

        alertValidate.style.color = "#EF5350"

        alertValidate.style.display = 'flex'
    }

    else if(regexValidate(regex, value)){
            
        alertValidate.style.display = "none";
    
        inputSelected.setAttribute('data-validate', 'true');

        inputSelected.style.borderColor = '#23DC3D';
      
      }else{

        alertValidate.innerHTML = error
    
        alertValidate.style.display = "flex";
      
        alertValidate.style.color = "#EF5350";

        inputSelected.style.borderColor = "#EF5350";
      
        inputSelected.setAttribute('data-validate', 'false');
  
      }

}

