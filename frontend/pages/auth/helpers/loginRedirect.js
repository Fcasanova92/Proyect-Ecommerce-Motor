export const loginRedirect = () => {

    setTimeout(() => {

        sessionStorage.setItem('sesion', 'activa');

        window.location.href = '../../index.html';
        
    }, 2000);

}

        
            