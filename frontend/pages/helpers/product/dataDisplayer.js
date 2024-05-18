import { addMessage, makeCardGrid, removeNodes } from './utilities/nodes.js';
import { getAll, getByFilter } from './dataHandler.js';
import { Pagination } from './utilities/pagination.js';

const filter = document.getElementById('filter');
const hideFilter = document.querySelectorAll('.hide-filter');
const filterMessage = document.getElementById('filter-message');
const wrapper = document.getElementById('card-wrapper');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

init();
hideFilter.forEach(button=>button.addEventListener('click',()=>filter.classList.toggle('visible')));

function init() {
    const pages = new Pagination();
    getAll().then(items=>{
        pages.data = items;
        prev.style.visibility = pages._index <= 0 ? "hidden" : "visible";
        next.style.visibility = pages._index >= pages._pageCount ? "hidden" : "visible";
        makeCardGrid(wrapper,pages.getCurrent());
        return;
    });
    filter.addEventListener('submit', (e)=>{
        e.preventDefault();
        removeNodes(wrapper);
        getByFilter(e.target).then(items=>{
            removeNodes(filterMessage);
            prev.style.visibility = pages._index <= 0 ? "hidden" : "visible";
            next.style.visibility = pages._index >= pages._pageCount ? "hidden" : "visible";
            if(items.length > 0) {
                addMessage(filterMessage,`Resultados de la busqueda: ${items.length}`);
                pages.data = items;
                makeCardGrid(wrapper,pages.getCurrent());
            }
            else {
                pages.data = [];
                addMessage(filterMessage,"Sin Resultados :(");
            }
        });
    });
    prev.addEventListener('click',() => {
        pages.setNext(-1);
        removeNodes(wrapper);
        prev.style.visibility = pages._index <= 0 ? "hidden" : "visible";
        next.style.visibility = pages._index >= pages._pageCount ? "hidden" : "visible";
        makeCardGrid(wrapper,pages.getCurrent());
    });
    next.addEventListener('click',() => {
        pages.setNext(1);
        removeNodes(wrapper);
        prev.style.visibility = pages._index <= 0 ? "hidden" : "visible";
        next.style.visibility = pages._index >= pages._pageCount ? "hidden" : "visible";
        makeCardGrid(wrapper,pages.getCurrent());
    });
}

