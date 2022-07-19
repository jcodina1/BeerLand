const { Router } = require('express');
const { getAllBeers, getBeerID } = require('../controllers/BeerController');



const router=Router();

router.get('/:id',getBeerID)
router.get('/',getAllBeers)
router.post('/')


module.exports=router;