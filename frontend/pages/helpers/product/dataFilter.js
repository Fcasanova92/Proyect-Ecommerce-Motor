export const dataFilter = (event) => {

    event.preventDefault()

    const filters = document.querySelectorAll("legend")

    const filtersArray = Array.from(filters)

    const filterValues = {}

    filtersArray.map((filter)=>{

        const filterName = filter.innerHTML.split(":")[0]

        filterValues[filterName]=""
    })

    console.log(filterValues)

}