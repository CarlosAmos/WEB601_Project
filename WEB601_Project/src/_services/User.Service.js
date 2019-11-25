// import { authHeader } from '../_helpers';

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

        return Users
    })
}

//Logout
function logout() {
    localStorage.removeItem('User')
}

//Register function
function register(User) {
    const requestOptions = {
        method: 'POST',
        hedaers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(User)
    };
    return fetch(`/Users/Register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}