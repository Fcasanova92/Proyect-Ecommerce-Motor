
import {getValidateDataform} from '../../helpers/form/validateForm.js'
import { handleAuthentication } from '../helpers/handleAuthentication.js'


export const authValidateAndRedirect = async (event) => {

    const formData= getValidateDataform(event)

    if(formData){

      await handleAuthentication(formData)

    }

  }


