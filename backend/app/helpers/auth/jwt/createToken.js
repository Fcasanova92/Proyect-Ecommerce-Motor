import {config} from 'dotenv'
import jwt from 'jsonwebtoken'

config()

export const createToken = (name, surname) => {

    try {

        const token = jwt.sign({ name, surname }, process.env.SECRET_KEY, { expiresIn: "1h" });

        return token

        
    } catch (error) {

        console.log(error)
        
    }

}

