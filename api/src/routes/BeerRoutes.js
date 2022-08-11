const { Router } = require("express");

const {
  getAllBeers,
  getBeerID,
  updateBeer,
  deleteBeer,
  postBeer,
  Beerbrewery
} = require("../controllers/BeerController");

const router = Router();

router.get("/id/:id", getBeerID);
router.get("/", getAllBeers);
router.post("/", postBeer);
router.put("/update/:id", updateBeer);
router.delete("/", deleteBeer);
router.get("/beers",Beerbrewery)

module.exports = router;
