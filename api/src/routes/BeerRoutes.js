const { Router } = require('express');
const { getAllBeers, getBeerID, updateBeer, deleteBeer } = require('../controllers/BeerController');

const router = Router();

router.get('/id/:id', getBeerID)
router.get('/', getAllBeers)
router.post('/')
router.put('/update/:id', updateBeer)
router.delete('/', deleteBeer)


module.exports = router;