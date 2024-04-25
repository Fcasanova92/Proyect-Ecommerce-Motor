import {regexValidate} from '../regexValidate.js'

import {regexTypes} from './regex/regexTypes.js'

export const validateField = ({target}) => {

    const {id, value} = target

    const {text, telephone, email} = regexTypes

    let alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
         
          regexValidate(email, alertValidate, value)

          break;

        case "telephone":
        
          regexValidate(telephone, alertValidate, value)
          break;
    
        default:
            
          regexValidate(text, alertValidate, value)
          break;
    }
}



