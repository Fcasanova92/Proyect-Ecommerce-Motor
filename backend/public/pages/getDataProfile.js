import {addNode} from './helpers/product/utilities/nodes.js';

const getData = () => {
    return new Promise(async (res, rej)=>{
        const token = sessionStorage.getItem("token");
        const resp = await axios.get("http://127.0.0.1:3000/api/auth/protected", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return resp.status === 200 ? res(resp.data) : rej({});
    });
}

const display = async () => {
    const data = await getData(); 
    if(data) {
        const parent = document.getElementById('user-data');
        for (const key in data) {
            addNode(parent,'h2',{class:'title-c'}).textContent = key;
            addNode(parent,'p',{class:'body-c'}).textContent = data[key];
        }
    }
}
