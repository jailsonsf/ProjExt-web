import api from '../api/axiosPI'

export const getAllBooks = () => {
    return api.get('/books/')
}