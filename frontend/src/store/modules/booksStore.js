import getAllBooks from '../../services/book.service'

const booksStore = {
    state: {
        books = [],
        currentBook = null,
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
          const resp = await getAllBooks()
          commit("SET_BOOKS", resp.data)
        },
        setCurrentBook({ commit }, idBook) {

        }
    },
}

export default booksStore