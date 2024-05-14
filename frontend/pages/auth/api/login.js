export const login = () => {

    sessionStorage.setItem('sesion', 'activa');
    
    // Redirigir a la página de inicio
    window.location.href = '../../pages/index.html';

}