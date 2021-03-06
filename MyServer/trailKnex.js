// List all trails
function listAllTrailsKnex(req, res) {

    const {
        knex
    } = req.app.locals
    knex
        //Query to select these columns from the table trails
        .select('ID','Name','Location','Description','Difficulty','Length','ImgLoc')
        .from('tblTrails')
        //For the status codes
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// List a single trail
function listSingleTrail(req,res) {

    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    knex
    //Query to select these columns from the table trails where the id matches
    .select('Name','Location','Description','Difficulty','Length')
    .from('tblTrails')
    .where({
        ID: `${ID}`
    })
    //status codes
    .then(data => {
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json(`Trail with ID ${ID} does not exist`);
        }
    })
    .catch(error => res.status(500).json(error))
}

// Post code here. This is used to add a trail to the database
function postTrail(req,res) {
    const {
        knex
    } = req.app.locals

    const payload = req.body

    const mandatoryColumns = ['Name','Location','Description','Difficulty','Length']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    //Check if the columns existm then add the data into the database.
    if (mandatoryColumnsExists) {
        knex('tblTrails')
            .insert(payload)
            //Status codes
            .then(response => {
                if(response) {
                    res.status(200).json('Trail record created')
                }})
            .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory columns are required ${mandatoryColumns}`);
    }
}



//Update trails
function updateTrail(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    const payload = req.body
    // Update entry in table trails where id matches
    knex('tblTrails')
        .where('ID', ID)
        .update(payload)
        .then(response => {
            //Status codes
            if (response) {
             res.status(204).json()
            } else {
                return res.status(404).json(`Trail with ID ${ID} not found`);
            }
    })
    .catch(error => res.status(500).json(error))
}


//Delete
function deleteTrail(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        ID
    } = req.params
    //Delete entry in the table where the id matches
    knex('tblTrails')
        .where('ID', ID)
        .del()
        .then(response => {
            if (response) {
                //Status codes
                res.status(200).json(`Trail with id ${ID} is removed`)
            } else {
                res.status(404).json(`Trail with id ${ID} not found`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllTrailsKnex,
    listSingleTrail,
    postTrail,
    updateTrail,
    deleteTrail    
}
