import {addNode} from './helpers/product/utilities/nodes.js';

const getUserData = (token) => {
    return new Promise(async (res, rej)=>{
        try {
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
    const token = sessionStorage.getItem("token")
    return new Promise(async (res, rej)=>{
        try {
            const resp = await axios.patch("http://127.0.0.1:3000/api/perfil/update-password", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            console.log(resp)
        // Aca la logica para cambiar el pass
        } catch (error) {
            console.log(error);
        }
    });
}

const handleUpdate = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    await passUpdate(data);
}

const display = async () => {
    //Usuario de ejemplo por q no puedo traer desde el Server
    const token = sessionStorage.getItem("token");
    const user = await getUserData(token)
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
