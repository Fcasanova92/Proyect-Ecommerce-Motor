export const getLikes = async () => {

    const token = sessionStorage.getItem("token")

    console.log(token)
   
    try{

        const response =  await axios.get("http://127.0.0.1:3000/api/likes/get-likes", {

            'Content-Type': 'application/json',

            headers: {
                'Authorization': `Bearer ${token}`
              }
        })

        if (response.status >= 200 && response.status < 300){

            console.log(response.data)
                
            return response.data
        }

      
          } catch (error) {
            
            if(error.response.status === 400){

                console.log( error.response.data.message)
            }
        }
}