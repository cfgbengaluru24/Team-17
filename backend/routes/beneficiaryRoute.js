const express = require('express');
//const {authorizeRoles,authenticateToken} = require('../middleware/authMiddleware');
const { createBeneficiary,updateBeneficiary,getBeneficiaryById} =require( '../controller/BeneficiaryController');

const router = express.Router();

router.post('/create',createBeneficiary);
router.put('/update/:id', updateBeneficiary);
router.get('/:id',getBeneficiaryById);

module.exports = router;