const { Router } = require('express');

const { getAllUsers, postUser, postFavorite, getUserId, deleteFavorite, Favorites } = require('../controllers/UserController');

const router = Router();

router.get('/', getAllUsers)
router.post('/', postUser)
router.post('/fav', postFavorite)
router.get('/id/:id',getUserId)
router.delete('/fav',deleteFavorite)
router.get('/fav/beer',Favorites)

module.exports = router;