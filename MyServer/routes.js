//Uses the trailKnex.js file where all the queries are
const TrailsList = require('./trailKnex.js');
const EventList = require('./eventKnex.js');
const TipsList = require('./tipsKnex.js');
const UserList = require('./userKnex.js');

module.exports = {
    TrailsList,
    EventList,
    TipsList,
    UserList
}