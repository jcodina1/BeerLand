function handleFilterBeer(e){
    dispatch(filterBeersByName(e.target.value))
    setCurrentPage(1)
}
function handleFilterBrewery(e){
    dispatch(filterBeersByBrewery(e.target.value))
    setCurrentPage(1)
}