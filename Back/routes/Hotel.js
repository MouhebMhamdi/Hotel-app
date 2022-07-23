var express = require('express');
var router = express.Router();
const HotelController = require('../Controller/HotelController');
const authenticateToken =require('./VerifyToken')
router.post('/add',authenticateToken,HotelController.add);
router.get('/all',HotelController.getAll);

module.exports = router;