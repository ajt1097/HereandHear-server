var express = require('express');
var router = express.Router();

const { favoriteController } = require('../controllers');

router.post('/add', favoriteController.add.post);
router.post('/delete', favoriteController.delete.post);
router.get('/list', favoriteController.list.get);

module.exports = router;