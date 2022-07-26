const { Router } = require('express');
const { getAllUsers, postUser, postFavorite } = require('../controllers/UserController');

const router = Router();

router.get('/', getAllUsers)
router.post('/', postUser)
router.post('/fav', postFavorite)

module.exports = router;