const express = require('express');
const router = express.Router();

const authenticateJWT = require('../middlewares/authenticate');

const { signup, signin, getUsers } = require('../controllers/user');
const {
  createShopping,
  getAllShopping,
  getShoppingById,
  updateShopping,
  destroyShopping,
} = require('../controllers/shopping');

// users api
router.post('/users/signup', signup);
router.post('/users/signin', signin);
router.get('/users', authenticateJWT, getUsers);

// shoppings api
router.post('/shopping', authenticateJWT, createShopping);
router.get('/shopping', authenticateJWT, getAllShopping);
router.get('/shopping/:id', authenticateJWT, getShoppingById);
router.put('/shopping/:id', authenticateJWT, updateShopping);
router.delete('/shopping/:id', authenticateJWT, destroyShopping);

module.exports = router;
