const {
  findAll,
  findOne,
  create,
  deleteOne,
  update
} = require('../models/users');

const getAll = async (req, res) => {
  try {
    const data = await findAll();
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

const getOne = async (req, res) => {
  try {
    const data = await findOne(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

const handlePost = async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

const handleDelete = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(204);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

const handeleUpdate = async (req, res) => {
  try {
    const data = await update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getAll,
  getOne,
  handlePost,
  handleDelete,
  handeleUpdate
};
