export const preventBackNavigation = () => {

    window.history.replaceState(null, '', window.location.href);
        
    window.history.pushState(null, '', window.location.href)

    // Escuchar eventos de popstate para prevenir la navegación hacia atrás
    window.addEventListener('popstate', function() {
        window.history.pushState(null, '', window.location.href);
    });

}