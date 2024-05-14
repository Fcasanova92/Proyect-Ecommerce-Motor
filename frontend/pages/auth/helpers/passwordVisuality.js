export const passwordVisuality = ({target}) =>{

    const eye = document.querySelector(`#${target.id}`);

    const password = document.querySelector("#password")

    if(password.type === "password"){

        password.type = "text"

        eye.innerHTML='<span id ="eye" class="material-symbols-outlined">visibility</span>'


    }
    password.type = "password"
    eye.innerHTML='<span id="eye" class="material-symbols-outlined">visibility_off</span>'
}