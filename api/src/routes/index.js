const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const user = require('./UserRoutes.js')
const beer = require('./BeerRoutes.js');
const seller = require('./SellerRoutes')
const { createdAllBeers } = require('../controllers/BeerController.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', user)
router.use('/beer', beer)
router.use('/seller', seller)

router.use('/', createdAllBeers)
module.exports = router;
