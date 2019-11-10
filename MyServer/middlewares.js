// Used to check if the requested ID is an integer or not

function checkID(req, res, next) {
    const ID = +req.params.ID
    if (Number.isInteger(ID)) {
        next()
    } else {
        return res.status(400).json(`ID must be an integer`)
    }
}

module.exports = {
    checkID
}