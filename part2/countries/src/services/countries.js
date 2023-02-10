import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/name'

const getAll = (name) => {
    const req = axios.get(`${baseUrl}/${name}`)
    return req.then(response => response.data)
}

export default { getAll }