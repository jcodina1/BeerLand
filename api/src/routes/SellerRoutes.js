const { Router } = require('express');
const { getAllSellers, postSellers } = require('../controllers/SellerController');

const router = Router();

router.post('/', postSellers)
router.get('/', getAllSellers)
module.exports = router