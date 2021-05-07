'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Shopping = sequelize.define(
  'Shopping',
  {
    // Model attributes are defined here
    name: DataTypes.STRING,
    createdDate: DataTypes.DATE,
  },
  {
    // Other model options go here
    timestamps: false,
  },
);

module.exports = Shopping;
