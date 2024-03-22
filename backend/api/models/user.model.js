const { DataTypes } = require('sequelize');
const { connection } = require('../../database/index');

const User = connection.define(
   'user', 
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      role: {
         type: DataTypes.ENUM('admin', 'user'),
         allowNull: false,
         defaultValue: 'user'
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: { 
            isEmail: true
            }
      },
   }, 
   {
      timestamps: false
   }
);

module.exports = User


