export const dataFilter = (event) => {

    event.preventDefault()

    const filters = document.querySelectorAll("legend")

    const filtersArray = Array.from(filters)

    const filterDic = {}

    filtersArray.map((filter)=>{

        const filterName = filter.innerHTML.split(":")[0].toLowerCase().trim()

        if(filterName!="precio"){

            const filterValue = document.querySelector(`input[type='radio'][name=${filterName}]`).value

            filterDic[filterName]=filterValue

        }

    })

    console.log(filterDic)

}