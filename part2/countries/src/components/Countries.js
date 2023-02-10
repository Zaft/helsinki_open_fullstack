import Country from "./Country"

const Countries = (props) => {
    console.log("Countires: showExtraInfo", props.showExtraInfo)
    return (
        props.countries.map((country) => {
            return <Country
                    key={country.name.common}
                    country={country} 
                    showExtraInfo={props.showExtraInfo}
                    handleShowCountry={props.handleShowCountry}
                    temperature={props.temperature}
                    wind={props.wind}
                    weatherIconUrl={props.weatherIconUrl}/>
        })
    )
}
export default Countries