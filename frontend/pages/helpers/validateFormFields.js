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
            if (regex.email.test(value)) {
                target.style.color="green"
                alertValidate.style.display="none"
            }else{
                target.style.color="red"
                alertValidate.style.display="flex"
            }
            break;

        case "telephone":

        if (regex.telephone.test(value)) {
            target.style.color="green"
            alertValidate.style.display="none"
        }else{
            target.style.color="red"
            alertValidate.style.display="flex"
        }
        break;
    
    
        default:

        if (regex.text.test(value)) {
            target.style.color="green"
            alertValidate.style.display="none"
        }else{
            target.style.color="red"
            alertValidate.style.display="flex"
        }
        break;
    }
}

