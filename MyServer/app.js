const express = require('express')
const app = express()
const router = express.Router()
//const data = require('./data')
///*
app.get('/', function(req,res) {
    res.send('hello world123')
})
//*/

app.get('/api/Trails', (req,res) => {
    res.send('hello world!')
})

app.post('/api/Trails', (req, res) => {
    res.send('HTTP POST setup done!');
});

app.all('/api/Trails', (req, res, next) => {
    res.send(`${req.method} setup done!`);
});

app.route('/api/Trails')
    .get((req, res) => {
        res.send('GET');
    })
    .post((req, res) => {
        res.send('POST');
    })

router.get('/Trails', (req, res) => res.send(data))

app.use('/api', router)

router.get('/Trails', (req, res) => {
    console.log(req,query)
    return res.send(data)
});

router.get('/Trails/:id', (req,res) => {
    const id = +req.params.id
    const employee = data.filter(d => d.id === id)
    console.log(req.params)
    return res.send(employee)
});

app.listen('3000')

