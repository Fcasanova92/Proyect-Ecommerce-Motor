import { uiConfig } from '../config/general.js';
import { clamp } from './math.js';

//Agrega un nodo hijo al padre y configura sus atributos 
export const addNode = (parent,tag,attr) => {
    if(parent !== null && parent !== undefined) {
        const node = document.createElement(tag);
        for (const prop in attr) {
            node.setAttribute(prop,attr[prop]);
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

export class DataList {
    data = null;
    rootNode = null;
    constructor(parent,data) {
        this.data = data;
        this.rootNode = addNode(parent,'ul',{class:'data-list grid-layout dynamic-rows dinamyc-cols gap-strong'});
    }
    display = (offset,limit) => {
        if(this.data !== null) {
            if(this.rootNode.firstChild) {
                removeNodes(this.rootNode);
            }
            for (let i = offset; i < limit; i++) {
                const node = addNode(this.rootNode,'li',{class:'data-item cell col-size-2 fx-shadow-dinamyc fx-depth-up transition-ease-normal'});
                const link = addNode(node,'a',{href:`#al_producto_${this.data[i].id}`});
                addNode(link,'img',{class:'thumbnail full-media-width',src:this.data[i].thumbnail,alt:'Imagen a modo de Referencia.'});
                const supportingText = addNode(link,'div',{class:'supporting-text'});
                addNode(supportingText,'h2',{class:'headline-c bottom-separator-light'}).textContent = this.data[i].brand;
                addNode(supportingText,'p',{class:'caption'}).textContent = `${this.data[i].type} | ${this.data[i].capacity} | ${this.data[i].color}`;
                addNode(supportingText,'p',{class:'body-b'}).textContent = this.data[i].description;
            }
        }
    }
}

export class Pagination {
    rootNode = null;
    prev = null;
    next = null;
    constructor(parent) {
        this.rootNode = addNode(parent,'ul',{class:"pagination flex-layout row-distribution gap-strong"});
        this.prev = addNode(this.rootNode,'li',{class:'prev page-selector'});
        this.prev.textContent = "<< Anterior";
        this.next = addNode(this.rootNode,'li',{class:'next page-selector'});
        this.next.textContent = "Siguiente >>";
    }
    setTracking(target) {
        if(target.data.length > uiConfig.itemsViewer.maxPerPage) {
            this.prev.style.display = "block";
            this.next.style.display = "block";
            let offset = target.rootNode.childNodes.length;
            this.prev.onclick = () => {
                const start = clamp(offset - uiConfig.itemsViewer.maxPerPage,0,offset);
                target.display(start,offset);
                if(start > 0) {
                    offset = start;
                }
            }
            this.next.onclick = () => {
                if(target.data.length > offset) {
                    const end = clamp(offset + uiConfig.itemsViewer.maxPerPage,offset,target.data.length);
                    target.display(offset,end);
                    if(end < target.data.length) {
                        offset = end;
                    }
                }
            }
        }else{
            this.prev.style.display = "none";
            this.next.style.display = "none";
        }
    }
}

// htmlNodes = {
//     parent: null,
//     childs: {
//         next: null,
//         prev: null
//     }
// };
// offset = 15;
// target = null;
// constructor(parent,target){
//     this.htmlNodes.parent = addNode(parent,'ul',{class:"pagination flex-layout row-distribution gap-strong"});
//     this.htmlNodes.childs.previous = addNode(this.htmlNodes.parent,'li',{class:'prev page-selector'});
//     this.htmlNodes.childs.next = addNode(this.htmlNodes.parent,'li',{class:'prev page-selector'});
//     this.htmlNodes.childs.previous.textContent = "<< Anterior";
//     this.htmlNodes.childs.next.textContent = "Siguiente >>";
//     this.htmlNodes.childs.previous.addEventListener('click',(e) => {
//         const start = clamp(this.offset - 15,0,this.offset);
//         target.display(start,this.offset);
//         if(start > 0) {
//             this.offset = start;
//         }
//         else {
//             e.target.style.display = "none";
//         }
//     });
//     this.htmlNodes.childs.next.addEventListener('click',(e) => {
//         const end = clamp(this.offset + 15,this.offset,target.data.length);
//         target.display(this.offset,end);
//         if(end < target.data.length) {
//             this.offset = end;
//         }
//         else {
//             e.target.style.display = "none";
//         }
//     });
// }
