
const CountriesForm = (props) => {
    return (
        <form>
            <div>
                find countries: <input value={props.searchValue} onChange={props.handleSearchValueChange}/>
            </div>
        </form>   
    )
}

export default CountriesForm