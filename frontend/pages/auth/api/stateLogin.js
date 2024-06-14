import { loadUserComponent } from "../../components/user/loadUserComponent.js";
import { loadUserinfo } from "../../components/user/loadUserInfo.js";
import { preventBackNavigation } from "../helpers/preventBackNavigation.js";

document.addEventListener("DOMContentLoaded", async function checkedLogin(){
    
    const user = document.querySelector("#user-session")

    const token = sessionStorage.getItem("token");

    try {

        if(token){

            const response = await axios.get("http://127.0.0.1:3000/api/auth/protected", {

                headers: {
        
                    'Authorization': `Bearer ${token}`
                  }
            })
        
            if (response.status === 200) {
                preventBackNavigation()
                await loadUserComponent(user)
                loadUserinfo(response.data)          
        }
        
        }} catch (error) {

            console.error('Error durante la verificación del token:', error);

        }

        })