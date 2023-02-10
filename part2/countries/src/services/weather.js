import axios from 'axios'
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`
const baseUrl2 = `https://api.openweathermap.org/data/2.5/weather`
const iconUrl =  `http://openweathermap.org/img/wn/`

const getWeather = (lat, lon) => {
    let url = `${baseUrl2}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const req = axios.get(`${url}`)
    return req.then(response => response.data)
}

const getWeatherIcon = (iconCode) => {
    let url = `${iconUrl}/${iconCode}.png`
    const req = axios.get(`${url}`)
    return req.then(response => response.data)
}

const getWeatherIconUrl = (iconCode) => {
    return `${iconUrl}/${iconCode}@2x.png`
}

export default { getWeather, getWeatherIcon, getWeatherIconUrl}