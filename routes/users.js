const router = require('express').Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getOne);
router.post('/', usersController.handlePost);
router.put('/:id', usersController.handeleUpdate);
router.delete('/:id', usersController.handleDelete);

module.exports = router;
