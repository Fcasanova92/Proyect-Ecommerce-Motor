
import {regexTypes} from './regex/regexTypes.js'

import {errors} from './errors/errorTypes.js'

import {validateField} from './validateAndStyleField.js'

export const validateDataInput = ({target}) => {

    const {id, value} = target

    const {text, telephone, email, consulta, password} = regexTypes

    const {textError, telephoneError, emailError, passwordError, empty} = errors

    const inputSelected = document.querySelector(`input[id=${id}]`)

    const alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
         
         validateField(email, value, emailError, alertValidate, inputSelected, empty)

          break;

        case "telephone":

          validateField(telephone, value, telephoneError, alertValidate, inputSelected, empty)

          break;
        
        case "name":

          validateField(text, value, textError, alertValidate, inputSelected, empty)

          break;


        case "surname":

          validateField(text, value, textError, alertValidate, inputSelected, empty)

          break;


        case "consulta":

          validateField(consulta, value, textError, alertValidate, inputSelected, empty)

          break;

        case "password":

          validateField(password, value, passwordError, alertValidate, inputSelected, empty)

          break;
    }
}



