const http = require('http')
const url = require('url')

const data = require('./data')

function TrailsList(req,res) {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
}

function errorRequest(req,res) {
    res.statusCode = 400;
    res.end('Please enter the correct endpoint')
}

const server = http.createServer((req, res) => {
    const urlEmployees = url.parse(req,url)
    console.log(urlTrails)

    if (urlEmployees.pathname === '/api/Trails') {
        switch (req.method) {
            case 'GET':
                TrailsList(req, res)
                break;
            case 'POST':
                addTrail(req, res)
                break;
            default:
                errorRequest(req, res)
                break;
        }
    } else {
        errorRequest(req,res)
    }
})

server.listen(8080, () => console.info(`Server is up on port 8080`))