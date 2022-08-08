const { Router } = require('express');
const { createSupport} = require('../controllers/Support');

const router = Router();

router.post('/', createSupport)


module.exports = router