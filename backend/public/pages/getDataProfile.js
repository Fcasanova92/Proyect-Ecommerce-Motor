import {addNode} from './helpers/product/utilities/nodes.js';

const getUserData = () => {
    return new Promise(async (res, rej)=>{
        try {
            const token = sessionStorage.getItem("token");
            const resp = await axios.get("http://127.0.0.1:3000/api/auth/protected", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return resp.status === 200 ? res(resp.data) : rej({});
        } catch (error) {
            console.log(error);
        }
    });
}

const passUpdate = async (data) => {
    return new Promise(async (res, rej)=>{
        try {
        // Aca la logica para cambiar el pass
        } catch (error) {
            console.log(error);
        }
    });
}

const handleUpdate = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const resp = passUpdate(data);
}

const display = async () => {
    //Usuario de ejemplo por q no puedo traer desde el Server
    const user = {
        id : 78,
        nombre: 'jhon',
        apellido: 'doe',
        correo: 'jhondoe@example.com'
    }; 
    if(user) {
        const user_data_attach = document.getElementById('user-data');
        for (const key in user) {
            if(key !== 'id') {
                const title =  key.toString();
                const body = user[key].toString();
                addNode(user_data_attach,'h2',{class:'title-d'}).textContent = title[0].toUpperCase() + title.slice(1) + ':';
                addNode(user_data_attach,'p',{class:'body-c'}).textContent = body + '.';
            }
        }
    }
}

const run = display();
document.getElementById('update-pass').addEventListener('submit',handleUpdate);
