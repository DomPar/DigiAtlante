const { Sequelize } = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
host: process.env.DB_HOST,
dialect: process.env.DB_DIALECT,
logging: false,
port: process.env.DB_PORT,
});

const checkDB = async () => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

const syncModels = async () => {
    try {
        await connection.sync({})
        console.log("Model syncronized")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkDB,
    syncModels,
    connection
}