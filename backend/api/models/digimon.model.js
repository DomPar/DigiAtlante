const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Digi = connection.define(
    'digimon',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            allowNull:false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        atributte: {
            type: DataTypes.ENUM('vaccine', 'data', 'virus'),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'https://static.wikia.nocookie.net/digimon/images/2/22/Agumon_%28Adventure_2020%29.png/revision/latest/thumbnail/width/360/height/360?cb=20210925004739&path-prefix=es'
        },
        attack: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

module.exports = Digi