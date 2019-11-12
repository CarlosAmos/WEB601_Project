// List all events

function listAllEventsKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        //Query to select these columns from the table events
        .select('ID','Name','Location','Description','Length','Date')
        .from('tblEvents')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// List a single event
function listSingleEvent(req,res) {

    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    knex
    //Query to select these columns from the table trails where the id matches
    .select('Name','Location','Description','Length','Date')
    .from('tblEvents')
    .where({
        ID: `${ID}`
    })
    //status codes
    .then(data => {
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json(`Event with ID ${ID} does not exist`);
        }
    })
    .catch(error => res.status(500).json(error))
}

// Add event to database

// Update event in database

// Delete event from database

module.exports = {
    listAllEventsKnex,
    listSingleEvent
}