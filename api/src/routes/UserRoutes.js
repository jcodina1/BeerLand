const { Router } = require("express");

const {
  getAllUsers,
  Favorites,
  getUserFav,
  postUser,
  postFavorite,
  getUserId,
  deleteFavorite,
  updateUser
} = require("../controllers/UserController");

const router = Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.post("/fav", postFavorite);
router.get("/id/:id", getUserId);
router.delete("/fav", deleteFavorite);
router.get("/fav/beer", Favorites);
router.get("/fav/beer/:id", getUserFav);
router.put("/update/:id", updateUser)

module.exports = router;
