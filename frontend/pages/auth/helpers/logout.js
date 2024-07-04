export const logout = () => {

    setTimeout(() => {

    sessionStorage.removeItem('token','');

    window.history.replaceState({}, document.title, window.location.href="/frontend/index.html");
        
    }, 1000);


}