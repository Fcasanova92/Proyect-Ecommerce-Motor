
document.addEventListener('DOMContentLoaded', () => {
    const token = sessionStorage.getItem('token');
    preventBackNavigation(token);
});


const preventBackNavigation = (token) => {
    if (token) {

        window.history.pushState(null, 'http://127.0.0.1:5500/frontend/index.html', window.location.href);
        
        window.addEventListener('popstate', function() {

            window.history.pushState(null, '', window.location.href);
        });

        window.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
                e.preventDefault();
            }
        });   
        };
    }
