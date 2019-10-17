const express = require('express');
const app = express()
const router = xpress.Router()

const config = require('./config')
//const data = require('./data')

//This is for the mysql driver
const mysql = require('mysql')

const connection = mysql.createConnection(config.database)
const routes = require('./routes')

// connection to database

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort} `);
})