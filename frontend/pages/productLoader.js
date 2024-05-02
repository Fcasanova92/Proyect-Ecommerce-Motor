const listParent = document.getElementById('products-list');

getData('../static/db/local_db.json')
.then(data=>{deployProductUI(listParent,data,30)})
.catch(err=>addChildNode(listParent,'h2',{class:'message error'}).textContent = err.message);

async function getData(url) {
    const resp = await fetch(url);
    if (!resp.ok){
        const msg = `¡Ups! ah ocurrido un error: ${resp.text}`;
        throw new Error(msg);
    }
    return await resp.json();
}

function deployProductUI(parent, data, itemsPerPage) {
    let start = 0;
    const products = addChildNode(parent,'ul',{class:'items grid-layout gap-strong dinamyc-rows dinamyc-cols'});
    const pages = addChildNode(parent,'ul',{class:'flex-layout row-distribution gap-strong top-margin-strong'});
    for (let i = 0; i < Math.ceil(data.length / itemsPerPage); i++) {
        const page = addChildNode(pages,'li',{class:'page-selector'});
        page.textContent = i + 1;
        page.addEventListener('click',()=>{
            removeAllChildNodes(products);
            pages.childNodes[start].classList.remove('active');
            page.classList.add('active');
            start = i;
            for (let j = itemsPerPage * i; j < itemsPerPage * (i + 1) && j < data.length; j++) {
                const card = addChildNode(products,'li',{id:data[j].index + 1,class:'item cell col-size-2 fx-shadow-dinamyc fx-depth-up transition-ease-normal'});
                const link = addChildNode(card,'a',{href:`#al_producto_${data[j].id}`, class:'item cell col-size-2 fx-shadow-dinamyc fx-depth-up transition-ease-normal'});
                addChildNode(link,'img',{class:'thumbnail full-media-width',src:data[j].thumbnail,alt:'Imagen a modo de Referencia.'});
                const supportingText = addChildNode(link,'div',{class:'supporting-text'});
                addChildNode(supportingText,'h2',{class:'headline-c bottom-separator-light'}).textContent = data[j].brand;
                addChildNode(supportingText,'p',{class:'caption'}).textContent = `${data[j].type} | ${data[j].capacity} | ${data[j].color}`;
                addChildNode(supportingText,'p',{class:'body-b'}).textContent = data[j].description;
            }
        });
    }
    pages.childNodes[start].click();
}

function addChildNode(parent,tag,attr) {
    let child = document.createElement(tag);
    for (const val in attr) {
        child.setAttribute(val,attr[val]);
    }
    parent.appendChild(child);
    return child;
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}