const Shopping = require('../models/shopping');

module.exports = {
  createShopping: async function (req, res, next) {
    try {
      const { shopping } = req.body;
      const { createddate, name } = shopping;

      const shoppingData = await Shopping.create({
        createdDate: new Date(createddate),
        name,
      });

      res.status(201).send({
        data: {
          createddate,
          id: shoppingData.id,
          name: shoppingData.name,
        },
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getAllShopping: async function (req, res, next) {
    try {
      const shoppings = await Shopping.findAll();
      res.status(200).send(shoppings);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getShoppingById: async function (req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(id)) return res.status(400).send('id parameter is not valid');

      const shopping = await Shopping.findOne({ where: { id } });
      if (!shopping) return res.status(404).send('shopping data is not found');

      res.status(200).send(shopping);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  updateShopping: async function (req, res, next) {
    try {
      const { shopping } = req.body;
      const { createddate, name } = shopping;

      const { id } = req.params;
      if (isNaN(id)) return res.status(400).send('id parameter is not valid');

      const shoppingData = await Shopping.findOne({ where: { id } });
      if (!shoppingData)
        return res.status(404).send('shopping data is not found');

      shoppingData.createdDate = createddate;
      shoppingData.name = name;
      const updatedShoppingData = await shoppingData.save();

      res.status(200).send(updatedShoppingData);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  destroyShopping: async function (req, res, next) {
    try {
      const { id } = req.params;
      if (isNaN(id)) return res.status(400).send('id parameter is not valid');

      const shoppingData = await Shopping.findOne({ where: { id } });
      if (!shoppingData)
        return res.status(404).send('shopping data is not found');

      const deletedShoppingData = await shoppingData.destroy();

      res
        .status(200)
        .send(
          `shopping data with id of ${deletedShoppingData.id} deleted successfully`,
        );
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};
