const User = require('../api/models/user.model')
const Digi = require('../api/models/digimon.model')

const addRelations = () => {
    Digi.belongsToMany(Digi, {
        through: 'Evolution',
        as: 'ParentEvo',
        foreignKey: 'parentId',
        otherKey: 'evoId',
        timestamps: false,
        onDelete: 'CASCADE'
    });
    Digi.belongsToMany(Digi, {
        through: 'Evolution',
        as: 'ChildEvo',
        foreignKey: 'evoId',
        otherKey: 'parentId',
        timestamps: false,
        onDelete: 'CASCADE'
    });

    Digi.belongsToMany(Digi, {
        through: 'PreEvolution',
        as: 'ParentPre',
        foreignKey: 'parentId',
        otherKey: 'preevoId',
        timestamps: false,
        onDelete: 'CASCADE'
    });
    Digi.belongsToMany(Digi, {
        through: 'PreEvolution',
        as: 'ChildPre',
        foreignKey: 'preevoId',
        otherKey: 'parentId',
        timestamps: false,
        onDelete: 'CASCADE'
    });

    Digi.belongsToMany(Digi, {
        through: 'Variant',
        as: 'ParentVar',
        foreignKey: 'parentId',
        otherKey: 'variantId',
        timestamps: false,
        onDelete: 'CASCADE'
    });
    Digi.belongsToMany(Digi, {
        through: 'Variant',
        as: 'ChildVar',
        foreignKey: 'variantId',
        otherKey: 'parentId',
        timestamps: false,
        onDelete: 'CASCADE'
    });
}
module.exports = {addRelations}