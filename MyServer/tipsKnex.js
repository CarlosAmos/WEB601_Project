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
function postTip(req,res) {
    const {
        knex
    } = req.app.locals

    const payload = req.body

    const mandatoryColumns = ['Description']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    //Check if the columns existm then add the data into the database.
    if (mandatoryColumnsExists) {
        knex('tblTips')
            .insert(payload)
            //Status codes
            .then(response => {
                if(response) {
                    res.status(200).json('Tip record created')
                }})
            .catch(error => res.status(500).json(error))
    } else {
        console.log("Error no man columns")
        return res.status(400).json(`Mandatory columns are required ${mandatoryColumns}`);
    }
}
// Update event in database
function updateTip(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    const payload = req.body
    // Update entry in table trails where id matches
    knex('tblTips')
        .where('ID', ID)
        .update(payload)
        .then(response => {
            //Status codes
            if (response) {
             res.status(204).json()
            } else {
                return res.status(404).json(`Tip with ID ${ID} not found`);
            }
    })
    .catch(error => res.status(500).json(error))
}
// Delete event from database
function deleteTip(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    //Delete entry in the table where the id matches
    knex('tblTips')
        .where('ID', ID)
        .del()
        .then(response => {
            if (response) {
                //Status codes
                res.status(200).json(`Tip with id ${ID} is removed`)
            } else {
                res.status(404).json(`Tip with id ${ID} not found`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllTipsKnex,
    listSingleTip,
    postTip,
    updateTip,
    deleteTip,
}