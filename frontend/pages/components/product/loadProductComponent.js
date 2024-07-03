import {init} from "../../helpers/product/dataDisplayer.js"

export const loadProductComponent = async () => {

    const main = document.getElementsByTagName("main")[0]

    try {
        const response = await fetch('./pages/components/product/productComponent.html');
        if (!response.ok) throw new Error('Error al cargar el componente HTML');

        main.innerHTML = await response.text();
        
        init()
     
    } catch (error) {
        console.error('Error al cargar el componente HTML:', error);
    }
}