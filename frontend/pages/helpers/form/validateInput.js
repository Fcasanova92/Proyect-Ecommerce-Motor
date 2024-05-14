
import {regexTypes} from './regex/regexTypes.js'

import {errors} from './errors/errorTypes.js'

import {validateField} from './validateField.js'

export const validateInput = ({target}) => {

    const {id, value} = target

    const {text, telephone, email, consulta, password} = regexTypes

    const {textError, telephoneError, emailError, passwordError} = errors

    const inputSelected = document.querySelector(`input[id=${id}]`)

    const alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
         
         validateField(email, value, emailError, alertValidate, inputSelected)

          break;

        case "telephone":

          validateField(telephone, value, telephoneError, alertValidate, inputSelected)

          break;
        
        case "name":

          validateField(text, value, textError, alertValidate, inputSelected)

          break;


        case "surname":

          validateField(text, value, textError, alertValidate, inputSelected)

          break;


        case "consulta":

          validateField(consulta, value, textError, alertValidate, inputSelected)

          break;

        case "password":

          validateField(password, value, passwordError, alertValidate, inputSelected)

          break;
    }
}



