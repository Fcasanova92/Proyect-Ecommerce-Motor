import { users } from "./dbUser.js";

export const addUser = (data) => {
    users.push(data);
}

export const getUser = () => {

    return users
}

