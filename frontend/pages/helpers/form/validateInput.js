
import {regexTypes} from './regex/regexTypes.js'

import {errors} from './errors/errorTypes.js'

import {validateField} from './validateField.js'

export const validateInput = ({target}) => {

    const {id, value} = target

    const {text, telephone, email} = regexTypes

    const {textError, telephoneError, emailError} = errors

    const inputSelected = document.querySelector(`input[id=${id}]`)

    const alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
         
         validateField(email, value, emailError, alertValidate, inputSelected)

          break;

        case "telephone":

          validateField(telephone, value, telephoneError, alertValidate, inputSelected)

        break;
        
        default:

          validateField(text, value, textError, alertValidate, inputSelected)

        break;
    }
}



