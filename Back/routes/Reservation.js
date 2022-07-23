
var express = require('express');
var router = express.Router();
const ReservationController = require('../Controller/Reservation');


router.post('/add',ReservationController.add);
router.get('/getAllByUser/:id',ReservationController.getAllByUser);

module.exports = router;