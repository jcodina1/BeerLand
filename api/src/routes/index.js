const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const buyer= require('./BuyerRoutes.js')
const beer= require('./BeerRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buyer',buyer)
router.use('/beer',beer)

module.exports = router;
