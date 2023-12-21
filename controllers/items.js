// get all the items
const getAllItems = (req, res) => {
  res.status(200).send("all items");
};

// get a single item
const getItem = (req, res) => {
  const item = db.find((item) => item.id === Number(req.params.id));
  if (!item) {
    return res.status(400).send(`Item with id ${req.params.id} wasn't found.`);
  }
  res.status(200).send(item);
};

// create a new item
const createItem = (req, res) => {
  res.send("create item");
};

// update a single item
const updateItem = (req, res) => {
  res.send("update item");
};
// delete a single item
const deleteItem = (req, res) => {
  res.send("delete item");
};

module.exports = {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
