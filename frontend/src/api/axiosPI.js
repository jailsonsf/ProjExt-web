import axios from 'axios'

let api = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
    headers: {}
})

export default api