const { Router } = require('express');
const { getAllSellers, postSellers, getAllSellersId } = require('../controllers/SellerController');

const router = Router();

router.post('/', postSellers)
router.get('/', getAllSellers)
router.get('/:id',getAllSellersId)

module.exports = router