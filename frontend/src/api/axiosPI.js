import axios from 'axios'

api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 1000,
    headers: {}
})

export default api