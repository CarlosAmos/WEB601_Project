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

const routes = require('./routes')


router.get('/Trails', routes.TrailsList.listAllTrailsKnex);

router.get('/Trails/:id', middlewares.checkID, routes.TrailsList.listSingleTrail);

router.post('/Trails', jsonParser, routes.TrailsList.postTrail);

router.patch('/Trails/:id', jsonParser, middlewares.checkID, routes.TrailsList.updateTrail);

router.delete('/Trails/:id', middlewares.checkID, routes.TrailsList.deleteTrail);



app.use('/api', cors(), router);

// connection to database

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort} `);
})