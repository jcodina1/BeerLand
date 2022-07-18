const { Router } = require('express');
const { getAllBeers } = require('../controllers/BeerController');



const router=Router();


router.get('/',getAllBeers)
router.post('/')


module.exports=router;