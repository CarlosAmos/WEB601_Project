export function authHeader() {
    
    let User = JSON.parse(localStorage.getItem('User'));

    if (User && User.token) {
        return { 'Authorization': 'Bearer ' + User.token };
    } else {
        return {};
    }
}