import {users} from "./userDb.js"

export const addUser = (data) =>{

    users.push(data)

    console.log(users)
}
