import './App.css';
import { useEffect, useState } from 'react'
import CountriesForm from './components/CountriesForm'
import countryService from './services/countries'
import weatherService  from './services/weather'
import Countries from './components/Countries';
import Notification from './components/Notification';

function App() {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [notification, setNotification] = useState(null)
  const [showExtraInfo, setShowExtraInfo] = useState(false)
  const [temperature, setTemperature] = useState(null)
  const [wind, setWind] = useState(null)
  const [weatherIconUrl, setWeatherIconUrl] = useState(null)

  useEffect(() => {
    if (searchValue) {
      countryService.getAll(searchValue)
        .then((countries) => {
          console.log("Countries ", countries)
          if (countries.length > 10) {
            setNotification(`Too many matches, specify another filter`)
          }
          if (countries.length === 1) {
            setShowExtraInfo(true)
            fetchWeatherData(countries[0])
          } 
          else setShowExtraInfo(false)

          setCountries(countries)
        })
    }
  }, [searchValue])

  const fetchWeatherData = (country) => {
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    weatherService.getWeather(lat, lon)
      .then(weatherData => {
        console.log("featchWeatherData", weatherData)
        let temp = (weatherData.main.temp - 273.15).toFixed(1)
        setTemperature(`${temp} Celcius`)
        setWind(`${weatherData.wind.speed} m/s`)

        if (weatherData.weather[0]) {
          const iconCode = weatherData.weather[0].icon
          let iconUrl = weatherService.getWeatherIconUrl(iconCode)
          setWeatherIconUrl(iconUrl)
        }
      })

  }

  const handleSearchValueChange = (event) => {
    console.log("handleSerachValueChange ", event.target.value)
    setSearchValue(event.target.value)
  }

  const handleShowCountry = (event) => {
    console.log("handleShowCounty",  event)
    setSearchValue(event)
  }

  return (
    <div>
      <CountriesForm
        countries={countries} 
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}/>
      { 
        countries.length > 10 
        ? <Notification message={notification} /> 
        : <Countries 
            countries={countries} 
            showExtraInfo={showExtraInfo}
            handleShowCountry={handleShowCountry}
            temperature={temperature}
            wind={wind}
            weatherIconUrl={weatherIconUrl}/>
      }
      
      
    </div>
  )
}

export default App;
