const Duck = require ('./ducks.model')

const getDucks = async (_req, res) => {
    const ducks = await Duck.find()
    res.send(ducks)
}

const addDucks = async (req, res) => {
    const new_duck = await Duck.create(req.body)
    res.send(new_duck)
}

const updateDucks = async (req, res) => {
    const updated_duck = await Duck.findOneAndUpdate(req.params.id, req.body)
    res.send(updated_duck)
}

const deleteDuck = async (req, res) => {
    const duck_id = req.params.id
    await Duck.findByIdAndRemove( duck_id)
    res.send(`duck ${duck_id} was deleted`)
}

module.exports = {
    getDucks,
    addDucks,
    updateDucks,
    deleteDuck
}
