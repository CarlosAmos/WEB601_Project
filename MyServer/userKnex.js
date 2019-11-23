// To view users in api
function listAllUsersKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
    .select('ID','Username','Password')
    .from('tblUsers')
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
}

//Add user to database
function postUser(req,res) {
    const {
        knex
    } = req.app.locals

    const payload = req.body

    const mandatoryColumns = ['Username','Password']
    const payloadkeys = object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadkeys,includes(mc))
    if (mandatoryColumnsExists) {
        knex('tblUsers')
        .insert(payload)
        .then(response => {
            if(response) {
                res.status(200).json('User created')
            }})
        .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory columns are required ${mandatoryColumns}`);
    }
}

function authenticateUser(req,res) {
    const { knex } = req.app.locals
    const {Username,Password} = req.body
    knex('tblUsers')
    .where('Username', Username)
    .where('Password', Password)
    .fetch()
    .then(user => {
        if (user)
        {

        } else {
            return res.status(404).json({ errors: { form: 'Invalid Credentials' }});
        }
    })
}

module.exports = {
    listAllUsersKnex,
    postUser,
    authenticateUser
}