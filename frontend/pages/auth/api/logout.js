export const logout = () => {

    sessionStorage.removeItem('sesion','');

    window.history.replaceState({}, document.title, window.location.href="./auth/login.html");

}