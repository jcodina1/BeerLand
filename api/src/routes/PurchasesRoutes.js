const { Router } = require('express');
const { getAllPurchases, postPurchases } = require('../controllers/PurchasesController');

const router = Router();

router.get('/',getAllPurchases)
router.post('/',postPurchases)

module.exports = router