const { Router } = require('express');
const { getAllBuyers } = require('../controllers/BuyerController');



const router=Router();

router.get('/',getAllBuyers)



module.exports=router;