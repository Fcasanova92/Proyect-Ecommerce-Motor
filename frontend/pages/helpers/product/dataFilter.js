export const dataFilter = (event) => {

    event.preventDefault()

    const filters = document.querySelectorAll("legend")

    const filtersArray = Array.from(filters)

    const filterDic = {}

    filtersArray.map((filter)=>{

        const filterName = filter.innerHTML.split(":")[0].toLowerCase().trim()

        if(filterName!="precio"){

            const filterValue = Array.from(document.querySelectorAll(`input[type='radio'][name=${filterName}]`))

            filterValue.map((element)=>{

                const {value, checked} = element

                if(checked){

                    filterDic[filterName]=value
                }

            })
           
        }
    })

    console.log(filterDic)

}