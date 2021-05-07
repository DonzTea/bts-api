const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bts', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
