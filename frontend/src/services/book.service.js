import api from '../api/axiosPI'

export const getAllBooks = () => {
    return api.get('/books/')
}

export const getBookDetails = (idBook) => {
    return api.get('/books/' + idBook + '/')
}

export const postBook = (Book, userId) => {
    return api.post('/books/', {
        title: Book.title,
        description: Book.description,
        user: userId
    })
}