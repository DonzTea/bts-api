const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'bts', // db name
  'root', // username
  'root', // password
  {
    host: 'localhost',
    dialect: 'mysql',
  },
);

module.exports = sequelize;
