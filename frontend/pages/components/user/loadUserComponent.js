

export const loadUserComponent = async (user) => {
    try {
        const response = await fetch('./pages/components/user/loginComponent.html');
        if (!response.ok) throw new Error('Error al cargar el componente HTML');

        const newNode = document.createElement('li')
        newNode.classList = "sub-menu"

        newNode.innerHTML = await response.text();
        user.parentNode.replaceChild(newNode, user);
    } catch (error) {
        console.error('Error al cargar el componente HTML:', error);
    }
}