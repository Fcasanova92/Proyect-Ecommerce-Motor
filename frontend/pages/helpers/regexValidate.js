
export const regexValidate = (regex, alertValidate, value) =>{
    console.log(regex)
    if (value.length !== 0 && !regex.test(value)) {
        alertValidate.style.display="flex"
        alertValidate.style.color="#EF5350"
        }else{
        alertValidate.style.display="none"
        }
}