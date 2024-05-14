var users = []

export const addUser = (data) =>{

    users.push(...{

        name:data[0],

        username:data[1],

        email:data[2],

        password:data[3]
    })

    console.log(users)
}

