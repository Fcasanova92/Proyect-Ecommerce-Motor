export const setForm = (inputs, messageSendForm, button) => {

    setTimeout(() => {

       inputs.map((input)=>{

        input.value = ""

        input.style.borderColor = "#ccc"

        button.disabled = false

        messageSendForm.style.display = "none"

       }) 
    }, 2000);

}