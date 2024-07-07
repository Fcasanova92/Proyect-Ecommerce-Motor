import { loadUserComponent } from "../../components/user/loadUserComponent.js";
import { loadUserinfo } from "../../components/user/loadUserInfo.js";
import {BASE_URL} from "../../baseRoot.js"


document.addEventListener("DOMContentLoaded", async function checkedLogin(){
    
    const user = document.querySelector("#user-session")

    const token = sessionStorage.getItem("token");

    try {

        if(token){

            const response = await axios.get(`${BASE_URL}/api/auth/protected`, {

                headers: {
        
                    'Authorization': `Bearer ${token}`
                  }
            })
        
            if (response.status === 200) {
                await loadUserComponent(user)
                loadUserinfo(response.data)          
        }
        
        }} catch (error) {

            console.error('Error durante la verificación del token:', error);

        }

        })