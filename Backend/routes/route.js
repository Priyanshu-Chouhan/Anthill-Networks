const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.post('/', verifyToken, isAdmin, routeController.addRoute);
router.put('/:id', verifyToken, isAdmin, routeController.updateRoute);

module.exports = router; 