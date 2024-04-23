const regex = {

    text: /^[a-zA-Z]+$/,
    email : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    password: /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,15}$/,
    telephone: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/

}

validateField = ({target}) => {

    const id = target.id

    const value = target.value

    let alertValidate = document.querySelector(`label[for=${id}]`)

    switch (id) {
        case "email":
            if (value.length == 0 && !regex.email.test(value)) {
                target.style.color="red"
                alertValidate.style.display="flex"
            }else{
                target.style.color="green"
                alertValidate.style.display="none"
                alertValidate.style.color="red"
            }
            break;

        case "telephone":

        if (value.length =!0 && regex.telephone.test(value)) {
            target.style.color="green"
            alertValidate.style.display="none"
            al
        }else{
            target.style.color="red"
            alertValidate.style.display="flex"
            alertValidate.style.color="red"
        }
        break;
    
    
        default:

        if ( value.length =!0 && regex.text.test(value)) {
            target.style.color="green"
            alertValidate.style.display="none"
        }else{
            target.style.color="red"
            alertValidate.style.display="flex"
            alertValidate.style.color="red"
        }
        break;
    }
}

