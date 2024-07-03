

export const loadLikeComponent = async () => {

    const main = document.getElementsByTagName("main")[0]
    try {
        const response = await fetch('./pages/components/like/likeComponent.html');
        if (!response.ok) throw new Error('Error al cargar el componente HTML');

        const newNode = document.createElement('section')
        newNode.classList = "news"

        newNode.innerHTML = await response.text();

        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        
        main.appendChild(newNode);

    } catch (error) {
        console.error('Error al cargar el componente HTML:', error);
    }
}