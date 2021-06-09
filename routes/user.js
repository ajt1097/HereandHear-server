var express = require('express');
var router = express.Router();

const { userController } = require('../controllers');

router.post('/signin', userController.signin.post);
router.post('/signout', userController.signout.post);
router.post('/signup', userController.signup.post);

module.exports = router;