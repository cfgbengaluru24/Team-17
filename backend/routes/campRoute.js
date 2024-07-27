const express = require('express');
const {createCamp, getCampById, getAllCamps} = require('../controller/campController');
const {authorizeRoles,authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authenticateToken, authorizeRoles('Admin'), createCamp);
router.get('/:id', authenticateToken, authorizeRoles('Admin'), getCampById);
router.get('/', authenticateToken, authorizeRoles('Admin'), getAllCamps);

module.exports = router;