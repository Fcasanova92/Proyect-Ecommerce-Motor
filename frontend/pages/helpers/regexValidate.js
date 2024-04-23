
export const regexValidate = (regex, alertValidate, value) =>{

    if (value.length !== 0 && regex.test(value)) {
        alertValidate.style.display="none"
        }else{
        alertValidate.style.display="flex"
        alertValidate.style.color="red"
        }
}