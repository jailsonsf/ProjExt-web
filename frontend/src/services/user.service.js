import api from '../api/axiosPI'

export const loginUser = ({ username, email, password }) => {
    return api.post('', {
        username,
        email,
        password
    })
}