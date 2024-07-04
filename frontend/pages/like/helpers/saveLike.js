export const saveLike = async (event) => {

    const product_id = parseInt(event.target.id)

    const token = sessionStorage.getItem("token")
   
    try{

        const response =  await axios.post("http://127.0.0.1:3000/api/likes/save-like", {product_id}, {

            'Content-Type': 'application/json',

            headers: {
                'Authorization': `Bearer ${token}`
              }
        })


        if (response.status >= 200 && response.status < 300){
                
            alert(response.data.message)

            return
        }
      
          } catch (error) {
            
            if(error.response.status === 400){

                alert( error.response.data.message)
            }
        }
}