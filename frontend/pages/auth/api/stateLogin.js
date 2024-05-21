document.addEventListener("DOMContentLoaded", function checkedLogin(){
    
    const user = document.querySelector("#user-session")

    console.log(user)

    const sesion = sessionStorage.getItem("sesion");

    if (sesion) {

        window.history.replaceState(null, '', window.location.href);

        window.history.pushState(null, '', window.location.href)

        // Escuchar eventos de popstate para prevenir la navegación hacia atrás
        window.addEventListener('popstate', function() {
            window.history.pushState(null, '', window.location.href);
        });

        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var newNode = document.createElement('div')
                        newNode.innerHTML = xhr.responseText
                        user.parentNode.replaceChild( newNode, user);
                    } else {
                        console.error('Error al cargar el componente HTML');
                    }
                }
            };
            xhr.open('GET', './pages/components/loginComponent.html', true);
            xhr.send();

            const name = document.querySelector("#name")
            const surname = document.querySelector("#surname")

            name.innerHTML = "Fernando"
            surname.innerHTML = "Casanova"

}



})