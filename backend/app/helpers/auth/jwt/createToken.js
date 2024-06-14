import {config} from 'dotenv'
import jwt from 'jsonwebtoken'

config()

export const createToken = (username) => {

    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: "3h" });

    return token

}

