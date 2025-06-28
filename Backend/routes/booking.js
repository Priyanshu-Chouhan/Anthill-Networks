const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { verifyToken } = require('../middleware/auth');

router.post('/', verifyToken, bookingController.bookBus);
router.put('/:id/cancel', verifyToken, bookingController.cancelBooking);

module.exports = router; 