// List all trails
function listAllTrailsKnex(req, res) {

    const {
        knex
    } = req.app.locals
    knex
        .select('Name','Location','Description','Difficulty','Length')
        .from('Trails')

        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// List a single trail
function listSingleTrail(req,res) {

    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
    .select('Name','Location','Description','Difficulty','Length')
    .from('Trails')
    .where({
        id: `${id}`
    })

    .then(data => {
        if (data.length > 0) {
            return res.status(200).json(data)
        } else {
            return res.status(500).json(`Trail with ID ${id}do not exist`);
        }
    })
    .catch(error => res.status(500).json(error))
}

// Post code here

function UpdateTrail(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    const payload = req.body
    knex('Trails')
    .where('id', id)
    .update(payload)
    .then(repsonse => {
        if (response) {
            res.status(204).json()
        } else {
            return res.status(404).json(`Trail with id ${id} not found`);
        }
    })
    .catch(error => res.status(500).json(error))
}

function deleteTrail(req,res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex('Trails')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Trail with id ${id} is removed`)
            } else {
                res.status(404).json(`Trail with id ${id} not found`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllTrailsKnex,
    listSingleTrail,
    //postTrail,
    UpdateTrail,
    deleteTrail    
}
