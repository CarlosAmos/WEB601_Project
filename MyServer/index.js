const express = require('express');

const router = express.Router()

const app = express();

app.get('/', function(req,res) {
    res.send('hello world')
})

app.get('/', function listAllTrailsKnex(req, res) {
    res.send(Trails)
})

app.listen('3000')