import api from '../api/axiosPI'

export const getAllBooks = () => {
    return api.get('/books/')
}

export const getBookDetails = (idBook) => {
    return api.get(`/books/${idBook}`)
}