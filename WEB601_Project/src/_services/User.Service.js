import { authHeader } from '../_helpers';

export const userService = {
    login,
    register
}

//Login function
function login(Username, Password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ Username, Password })
    };

    return fetch(`/Users/Auth`, requestOptions)
    .then(handleResponse)
    .then(Users => {
        localStorage.setItem('Users', JSON.stringify(Users))

        return account
    })
}

//Register function
function register(fields) {
    const requestOptions = {
        method: 'POST',
        hedaers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    return fetch(`/Users/Register`, requestOptions).then(handleResponse);
}