import { getAllBooks, getBookDetails, postBook } from '../../services/book.service'

const booksStore = {
    state: {
        books: [],
        currentBook: null,
    },
    mutations: {
      SET_BOOKS(state, books) {
        state.books = books
      },
      SET_CURRENT_BOOK(state, idBook) {
        state.currentBook = idBook
      }
    },
    actions: {
      async loadingBooks({ commit }){
        let resp = await getAllBooks()
        commit("SET_BOOKS", resp.data)
      },
      async setCurrentBook({ commit }, idBook) {
        var resp = await getBookDetails(idBook)
        commit('SET_CURRENT_BOOK', resp.data)
      },
      async createBook({ commit }, book, userId) {
        let resp = await postBook(book, userId)
        commit('SET_CURRENT_BOOK', resp.data)
      }
    },
}

export default booksStore