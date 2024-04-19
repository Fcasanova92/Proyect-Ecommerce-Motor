
function loadUiComponent(url, contenedor) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(contenedor).innerHTML = data;

        });
}
// Cargar el header y el footer cuando la página se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    loadUiComponent('ui/nav.html', 'header-container' );
    loadUiComponent('ui/footer.html', 'footer-container');
});