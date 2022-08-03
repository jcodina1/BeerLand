const { Router } = require('express');
const { getAllPurchases, postPurchases,getAllPurchasesByUser, getPurchasesBySeller, updateStatus } = require('../controllers/PurchasesController');

const router = Router();

router.get('/', getAllPurchases)
router.post('/', postPurchases)
router.get('/user',getAllPurchasesByUser)
router.get('/seller',getPurchasesBySeller)
router.put('/status',updateStatus)

module.exports = router