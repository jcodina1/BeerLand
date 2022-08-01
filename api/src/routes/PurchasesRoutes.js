const { Router } = require('express');
const { getAllPurchases, postPurchases,getAllPurchasesByUser } = require('../controllers/PurchasesController');

const router = Router();

router.get('/', getAllPurchases)
router.post('/', postPurchases)
router.get('/user',getAllPurchasesByUser)

module.exports = router