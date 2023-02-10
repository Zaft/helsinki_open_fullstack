
const Country = (props) => {
    // console.log("Country props", props)
    let languages = []
    let flagImg = "";
    if (props.showExtraInfo) {
        languages = Object.values(props.country.languages)
        flagImg = props.country.flags.png
        // console.log("languages", languages)
    }
    return (
        <>
            {!props.showExtraInfo 
                ?  <div>{props.country.name.common} 
                        <button onClick={() => props.handleShowCountry(props.country.name.common)}>show</button>
                    </div>
                :  (
                    <div>
                        <h2>{props.country.name.common}</h2>
                        <div>capital {props.country.capital}</div>
                        <div>area {props.country.area}</div>
                        <h3>languages</h3>
                        <ul>
                            {languages.map((lang) => {
                                return <li key={lang}>{lang}</li>
                            })}
                        </ul>
                        <img src={flagImg} alt="flag"></img>
                        <h3>Weather in {props.country.capital}</h3>
                        <div>temperature {props.temperature}</div>
                        <img src={props.weatherIconUrl}></img>
                        <div>wind {props.wind}</div>
                    </div>
                    )
            }
        </>
    )
}
export default Country;