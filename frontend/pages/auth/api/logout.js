export const logout = () => {

    sessionStorage.setItem('sesion','');

    window.history.replaceState({}, document.title, window.location.href="./auth/login.html");

}