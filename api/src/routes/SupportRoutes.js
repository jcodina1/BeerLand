const { Router } = require('express');
const { createSupport,SendEmail, getSupports, deleteSupport} = require('../controllers/Support');

const router = Router();

router.post('/', createSupport)
router.post('/answer', SendEmail )
router.get('/', getSupports)
router.delete("/", deleteSupport)




module.exports = router