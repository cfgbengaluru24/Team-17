const express = require('express');
const router = express.Router();
const { register, login, adminRoute, doctorRoute, schoolRoute } = require('../controller/authController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/admin', authenticateToken, authorizeRoles('Admin'), adminRoute);
router.get('/doctor', authenticateToken, authorizeRoles('Doctor'), doctorRoute);
router.get('/school', authenticateToken, authorizeRoles('School'), schoolRoute);

module.exports = router;