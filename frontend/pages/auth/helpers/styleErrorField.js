export const handleAuthenticationError = (inputsArray, message, id, type, button) => {

    const errorMessageLabel = document.querySelector("label[for=send]");

    button.innerHTML = (type === "login") ? "Login" : "Register";

    button.disabled = false;

    inputsArray.forEach(input => {

        console.log(id, input.id)

        input.style.borderColor = (input.id === `${id}`) ? "#EF5350": "none";

        errorMessageLabel.style.display = (input.id === `${id}`) ? "none": "flex";

        errorMessageLabel.innerHTML =  message;

        errorMessageLabel.style.color = "red";

        setTimeout(() => {

            errorMessageLabel.style.display = (input.id === `${id}`) ? "flex": "none";
            
        }, 2500);
    });

    
}