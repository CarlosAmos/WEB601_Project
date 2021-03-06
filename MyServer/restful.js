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
//,

// The get, post, patch and delete requests sent to the api for trail table
router.get('/Trails', routes.TrailsList.listAllTrailsKnex);
router.get('/Trails/:ID',middlewares.checkID, routes.TrailsList.listSingleTrail);
router.post('/Trails', jsonParser, routes.TrailsList.postTrail);
router.patch('/Trails/:ID', jsonParser, middlewares.checkID, routes.TrailsList.updateTrail);
router.delete('/Trails/:ID', middlewares.checkID, routes.TrailsList.deleteTrail);

// The get, post, patch and delete requests sent to the api for event table
router.get('/Events', routes.EventList.listAllEventsKnex);
router.get('/Events/:ID',middlewares.checkID, routes.EventList.listSingleEvent);
router.post('/Events', jsonParser, routes.EventList.postEvent);
router.patch('/Events/:ID', jsonParser, middlewares.checkID, routes.EventList.updateEvent);
router.delete('/Events/:ID', middlewares.checkID, routes.EventList.deleteEvent);

// The get, post, patch and delete requests sent to the api for tips table
router.get('/Tips', routes.TipsList.listAllTipsKnex);
router.get('/Tips/:ID',middlewares.checkID, routes.TipsList.listSingleTip);
router.post('/Tips', jsonParser, routes.TipsList.postTip);
router.patch('/Tips/:ID', jsonParser, middlewares.checkID, routes.TipsList.updateTip);
router.delete('/Tips/:ID', middlewares.checkID, routes.TipsList.deleteTip);

//requests for the users table
router.get('/Users', routes.UserList.listAllUsersKnex);
router.post('/Users/Register', jsonParser, routes.UserList.postUser);
router.post('/Users/Auth', jsonParser, routes.UserList.authenticateUser);

app.use('/api', cors(), router);

// connection to database

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort} `);
})