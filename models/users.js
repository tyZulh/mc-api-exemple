const mysql = require('../db');

const findAll = async () => {
  const result = await mysql.query('SELECT * FROM user');
  return result[0];
};

const findOne = async (id) => {
  const result = await mysql.query('SELECT * FROM user WHERE id = ?', id);
  return result[0];
};

const create = async (body) => {
  const result = await mysql.query('INSERT INTO user SET ?', body);
  return findOne(result[0].insertId);
};

const deleteOne = async (id) => {
  const result = await mysql.query('DELETE FROM user WHERE id = ?', id);
  return result[0];
};

const update = async (id, body) => {
  await mysql.query('UPDATE user SET ? WHERE id = ?', [body, id]);
  return findAll(id);
};

module.exports = {
  findAll,
  findOne,
  create,
  deleteOne,
  update
};
