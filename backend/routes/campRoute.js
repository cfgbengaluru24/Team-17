const express = require('express');
const {createCamp, getCampById, getAllCamps,getBeneficiariesByCampId} = require('../controller/campController');
//const {authorizeRoles,authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', createCamp);
router.get('/:id',  getCampById);
router.get('/',  getAllCamps);
router.get('/beneficiaries/:id', getBeneficiariesByCampId);
module.exports = router;