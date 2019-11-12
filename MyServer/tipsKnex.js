// List all events

function listAllTipsKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        //Query to select these columns from the table events
        .select('ID','Description')
        .from('tblTips')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// List a single event
function listSingleTip(req,res) {

    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    knex
    //Query to select these columns from the table trails where the id matches
    .select('Description')
    .from('tblTips')
    .where({
        ID: `${ID}`
    })
    //status codes
    .then(data => {
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json(`Tip with ID ${ID} does not exist`);
        }
    })
    .catch(error => res.status(500).json(error))
}

// Add event to database

// Update event in database

// Delete event from database

module.exports = {
    listAllTipsKnex,
    listSingleTip
}