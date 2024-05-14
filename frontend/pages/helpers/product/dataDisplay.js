import { DataList, Pagination } from './utilities/nodes.js'
import { getItems } from './dataHandler.js'
import { uiConfig } from './config/general.js';
import { clamp } from './utilities/math.js';

InitUI();

function InitUI() {
    const filter = document.getElementById('items-filter');
    const viewer = document.getElementById('items-viewer');
    const pagination = new Pagination(viewer);
    const list = new DataList(viewer,null);
    filter.addEventListener('submit', (event) => {
        event.preventDefault();
        getItems(formData(event.target)).then(data => {
            list.data = data;
            list.display(0,clamp(uiConfig.itemsViewer.maxPerPage,0,data.length));
            pagination.setTracking(list); 
        });
    });
    getItems(null).then(data => {
        list.data = data;
        list.display(0,clamp(uiConfig.itemsViewer.maxPerPage,0,data.length));
        pagination.setTracking(list); 
    })
}

const formData = (form) => {
    return {
        brands : getChekedInputsValue(form.brand),
        colors : getChekedInputsValue(form.color),
        capacity : form.capacity.value ? JSON.parse(form.capacity.value) : { min:0, max:5000 },
        price : { 
            min: form.minPrice.value.length === 0 ? 0 : parseInt(form.minPrice.value), 
            max: form.maxPrice.value.length === 0 ? 1000000000 : parseInt(form.maxPrice.value)
        }
    }
}

const getChekedInputsValue = (collection) => {
    let data = [];
    for (const input of collection) {
        if(input.checked) {
            data.push(input.value);
        }
    }
    return data;
}