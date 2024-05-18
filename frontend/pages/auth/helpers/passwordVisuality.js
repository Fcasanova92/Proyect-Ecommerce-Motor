export const passwordVisuality = ({target}) =>{

    const eye = document.querySelector(`#${target.id}`);

    const password = document.querySelector("#password")


    if(password.type === "password"){

        password.type = "text"

        console.log(password.type)

        eye.textContent = "visibility"

    }else{
        password.type = "password"
        eye.innerHTML= "visibility_off"   
    }
}