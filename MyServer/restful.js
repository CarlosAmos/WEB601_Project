const express = require('express');
const app = express()
const router = express.Router()
var cors = require('cors')
const config = require('./config')
const middlewares = require('./middlewares')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


//connection to database
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

app.locals.knex = knex

// Use the routes.js file
const routes = require('./routes')

// The get, post, patch and delete requests sent to the api
router.get('/Trails', routes.TrailsList.listAllTrailsKnex);

router.get('/Trails/:ID', middlewares.checkID, routes.TrailsList.listSingleTrail);

router.post('/Trails', jsonParser, routes.TrailsList.postTrail);

router.patch('/Trails/:ID', jsonParser, middlewares.checkID, routes.TrailsList.updateTrail);

router.delete('/Trails/:ID', middlewares.checkID, routes.TrailsList.deleteTrail);



app.use('/api', cors(), router);

// connection to database

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort} `);
})