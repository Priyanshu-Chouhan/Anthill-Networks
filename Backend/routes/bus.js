const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Admin
router.post('/', verifyToken, isAdmin, busController.addBus);
router.put('/:id', verifyToken, isAdmin, busController.updateBus);

// User
router.get('/search', verifyToken, busController.searchBuses);

module.exports = router; 