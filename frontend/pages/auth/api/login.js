import { getUser } from "../db/userMethods.js";

export const login = (data) => {

    console.log("los usuarios son" , getUser())

    sessionStorage.setItem('sesion', 'activa');
    
    // Redirigir a la página de inicio
    window.location.href = '../../pages/index.html';

}