export const passwordVisuality = ({target}) =>{

    const eye = document.querySelector(`#${target.id}`);

    console.log(eye)

    const password = document.querySelector("#password")

    console.log(password.type)

    if(password.type === "password"){

        password.type = "text"

        console.log(password.type)

        eye.textContent = "visibility"

    }else{
        password.type = "password"
        eye.innerHTML= "visibility_off"   
    }
}