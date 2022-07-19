const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const buyer= require('./BuyerRoutes.js')
const beer= require('./BeerRoutes.js');
 const { createdAllBeers } = require('../controllers/BeerController.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buyer',buyer)
router.use('/beer',beer)
router.use('/',createdAllBeers)
module.exports = router;
