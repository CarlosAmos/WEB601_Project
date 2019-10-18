const express = require('express');
const app = express()


const router = express.Router()
const config = require('./config')
const middleware = require('.middleware')


//connection to database
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})


// connection to database

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort} `);
})