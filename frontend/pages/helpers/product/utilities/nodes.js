//Agrega un nodo hijo al padre y configura sus atributos 
export const addNode = (parent,tag,attr) => {
    if(parent) {
        const node = document.createElement(tag);
        if(attr) {
            for (const prop in attr) {
                node.setAttribute(prop,attr[prop]);
            }
        }
        parent.appendChild(node);
        return node;
    }
    return console.log("El elemento padre ,al cual quieres agregar un nodo, no existe o es null");
}

//Remueve todos los nodos hijo dentro del padre
export const removeNodes = (parent) => {
    if(parent !== null && parent !== undefined) {
        while(parent.firstChild) {
            const node = parent.firstChild;
            parent.removeChild(node);
        }
        return;
    }
    return console.log("El elemento padre proporcionado para la acción de borrar nodos no existe o es nulo");
}

//Agrega un nodo con texto al padre 
export const addMessage = (parent,message,type) => {
    const node = addNode(parent, 'p', {class:"message"});
    node.classList.add(type);
    node.textContent = message;
    return node;
}

//Agrega un nodo carta con información al padre 
export const addCard = (parent,data) => {
    const card = addNode(parent, 'article', {id:`product_${data.id}_${data.index}`, class: 'card fx-deep-shadow-dinamyc fx-move-up'});
    const media = addNode(card, 'div', {class : 'media'});
    addNode(media,'img',{class : 'card-thumbnail', src : data.thumbnail, alt : 'Imagen a modo de referencia del producto.'});
    const supportingText = addNode(card, 'div', {class : 'supporting-text'});
    addNode(supportingText, 'p', {class:'overline'}).textContent = "MODELO";
    addNode(supportingText, 'h3', {class:'title-c'}).textContent = data.brand;
    addNode(supportingText, 'p', {class:'caption'}).textContent = `${data.type} | ${data.capacity}cc | ${data.color}`;
    addNode(supportingText, 'p', {class:'body-b'}).textContent = data.description;
    const footer = addNode(supportingText, 'div', {class : 'footer'});
    const price = addNode(footer, 'div', {class : 'price'});
    addNode(price,'h4',{class:'title'}).textContent = 'Precio: ';
    addNode(price,'span', {class:'amount'}).textContent = data.price;
    const actions = addNode(footer, 'ul', {class:'actions'});
    const see = addNode(actions, 'a', {class:'see', href:'pages/viewitem.html'});
    addNode(see,'i', {class:'fa-regular fa-eye '});
    const like = addNode(actions, 'a', {class:'like', href:'#'});
    addNode(like,'i', {class:'fa-regular fa-heart'});

}

//Agrega un nodos carta con información al padre 
export const addCards = (parent,data) => {
    if(Array.isArray(data)) {
        data.map(item => addCard(parent,item));
    }
}