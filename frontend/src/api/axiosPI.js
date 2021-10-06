import axios from 'axios'

let api = axios.create({
    baseURL: "http://0.0.0.0:7000/api",
    timeout: 1000,
    headers: {}
})

export default api