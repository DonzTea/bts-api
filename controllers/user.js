const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = {
  signup: async function (req, res, next) {
    try {
      const { user } = req.body;
      const {
        username,
        email,
        encrypted_password,
        phone,
        address,
        city,
        country,
        name,
        postcode,
      } = user;

      const accessToken = jwt.sign({ username }, 'SECRET');

      await User.create({
        username,
        email,
        password: encrypted_password,
        phone,
        address,
        city,
        country,
        name,
        postcode,
      });

      res.status(200).send({
        email,
        token: accessToken,
        username,
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  signin: async function (req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email, password } });
      if (!user) return res.status(404).send('user is not found');

      const accessToken = jwt.sign({ username: user.username }, 'SECRET');

      res.status(200).send({
        email,
        token: accessToken,
        username: user.username,
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },

  getUsers: async function (req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};
