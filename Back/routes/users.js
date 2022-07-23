var express = require('express');
var router = express.Router();
const UserController = require('../Controller/UserController');


/* GET users listing. */
router.post('/login',UserController.signin);
router.post('/signup',UserController.signup);


module.exports = router;
