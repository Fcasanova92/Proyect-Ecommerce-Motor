document.addEventListener("DOMContentLoaded", function checkedLogin(){

    const sesion = sessionStorage.getItem("sesion");

    if (sesion) {
        // Si el usuario ya está autenticado, redirigir a la página principal
        window.location.href = "../../pages/index.html";}
}) 