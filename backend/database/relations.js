const User = require('../api/models/user.model')
const Digi = require('../api/models/digimon.model')

const addRelations = () => {
    Digi.belongsToMany(Digi, {through: 'Evolution', timestamps: false, onDelete: 'CASCADE'})
}

module.exports = addRelations