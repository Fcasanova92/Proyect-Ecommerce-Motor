export const logout = () => {

    sessionStorage.setItem('','');

    window.location.href = '';

}