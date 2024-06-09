export const logout = () => {

    setTimeout(() => {

    sessionStorage.removeItem('sesion','');

    window.history.replaceState({}, document.title, window.location.href="index.html");
        
    }, 1000);


}