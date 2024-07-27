const express = require('express');
const {authorizeRoles,authenticateToken} = require('../middleware/authMiddleware');
const { createBeneficiary,updateBeneficiary,getBeneficiaryById} =require( '../controller/BeneficiaryController');

const router = express.Router();
router.post('/create',authenticateToken,authorizeRoles('Doctor') ,createBeneficiary);
router.put('/update/:id',authenticateToken,authorizeRoles('Doctor') , updateBeneficiary);
router.get('/:id',authenticateToken,authorizeRoles('Doctor','Admin','School') ,getBeneficiaryById);

module.exports = router;