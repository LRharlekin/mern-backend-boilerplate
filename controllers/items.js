// require Model
const Item = require("../models/Item");

/* 
Documentation for Mongoose Queries: https://mongoosejs.com/docs/queries.html
Mongoose models provide several static helper functions for CRUD operations.
 */

// get all the items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get a single item
const getItem = (req, res) => {
  // const item = db.find((item) => item.id === Number(req.params.id));
  // if (!item) {
  //   return res.status(400).send(`Item with id ${req.params.id} wasn't found.`);
  // }
  res.status(200).send(`get single item with ID: ${req.params.id}`);
};

// create a new item
const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({ newItem });
  } catch (error) {}
  res.status(500).json({ msg: error });
};

// update a single item
const updateItem = (req, res) => {
  res.send(`update single item with ID: ${req.params.id}`);
};
// delete a single item
const deleteItem = (req, res) => {
  res.send(`delete single item with ID: ${req.params.id}`);
};

module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
