'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    postcode: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
  },
  {
    // Other model options go here
    timestamps: false,
  },
);

module.exports = User;
