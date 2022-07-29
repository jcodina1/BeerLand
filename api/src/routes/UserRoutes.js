const { Router } = require("express");

const { routes } = require("../app");
const {
  getAllUsers,
  Favorites,
  getUserFav,
  postUser,
  postFavorite,
  getUserId,
  deleteFavorite,
} = require("../controllers/UserController");

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.post("/fav", postFavorite);
router.get("/id/:id", getUserId);
router.delete("/fav", deleteFavorite);
router.get("/fav/beer", Favorites);
router.get("/fav/beer/:id", getUserFav);

module.exports = router;
