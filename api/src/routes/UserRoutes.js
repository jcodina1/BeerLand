const { Router } = require("express");

<<<<<<< HEAD
const {
  getAllUsers,
  postUser,
  postFavorite,
  getUserId,
  deleteFavorite,
  Favorites,
} = require("../controllers/UserController");

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.post("/fav", postFavorite);
router.get("/id/:id", getUserId);
router.delete("/fav", deleteFavorite);
router.get("/fav/beer", Favorites);
=======
const { routes } = require('../app');
const { getAllUsers, Favorites,getUserFav,postUser, postFavorite, getUserId, deleteFavorite } = require('../controllers/UserController');



const router = Router();

router.get('/', getAllUsers)
router.post('/', postUser)
router.post('/fav', postFavorite)
router.get('/id/:id',getUserId)
router.delete('/fav',deleteFavorite)
router.get('/fav/beer',Favorites)
router.get('/fav/beer/:id',getUserFav)
>>>>>>> origin/develop

module.exports = router;
