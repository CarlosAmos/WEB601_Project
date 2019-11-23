let Users = JSON.parse(localStorage.getItem('Users')) || []; 

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/Users/Auth') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    let filteredUsers = users.filter(User => {
                        return User.Username === params.Username && User.Password === params.Password;
                    });

                    if (filteredUsers.length)
                }
            })
        })
    }
}