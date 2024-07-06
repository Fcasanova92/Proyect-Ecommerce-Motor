
document.addEventListener('DOMContentLoaded', () => {
    const token = sessionStorage.getItem('token');
    preventBackNavigation(token);
});


const preventBackNavigation = (token) => {
    if (token) {

        window.history.pushState(null, 'http://127.0.0.1:3000/', window.location.href);
        
        window.addEventListener('popstate', function() {

            window.history.pushState(null, '', window.location.href);
        }); 
        };
    }
