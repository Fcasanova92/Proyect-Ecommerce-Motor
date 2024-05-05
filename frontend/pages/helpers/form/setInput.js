export const setInput = (inputs) => {

    setTimeout(() => {

        inputs.map((input)=> {

            input.innerHtmnl = ""
        })
        
    }, 3000);

}