import { users } from "./dbUser.js";

export const addUser = (data) => {
    users.push(data);
}

export const getUser = () => {

    return users
}





import {users} from "./userDb.js"

export const addUser = (data) =>{

    console.log(data)

    users.push(data)

}

export const getUser = () =>{

    return users

}