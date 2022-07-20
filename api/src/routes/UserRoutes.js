const { Router } = require('express');
const { getAllUsers, postUser } = require('../controllers/UserController');




const router = Router();

router.get('/', getAllUsers)
router.post('/', postUser)





module.exports = router;