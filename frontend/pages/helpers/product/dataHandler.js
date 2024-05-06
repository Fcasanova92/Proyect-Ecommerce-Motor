import { getMessage } from './error/serverError.js'

const getData = async () => {
    const resp = await fetch('../static/db/local.json');
    if(!resp.ok){
        throw new Error(getMessage(resp.status));
    }
    return resp.json();
}

export const getItems = async (query) => {
    const data = await getData();
    if(query !== null) {
        return data.filter(item=>
            (query.brands.length === 0 || query.brands.some((brand) => brand === item.brand.toLowerCase())) &&
            (query.colors.length === 0 || query.colors.some((color) => color === item.color.toLowerCase())) && 
            (query.capacity === null || query.capacity.min <= item.capacity && query.capacity.max >= item.capacity) && 
            query.price.min <= item.price && query.price.max >= item.price
        );
    }
    return data;
}