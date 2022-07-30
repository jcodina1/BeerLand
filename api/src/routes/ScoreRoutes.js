<<<<<<< HEAD
const { Router } = require("express");
const { getScore, postScore } = require("../controllers/ScoreController");

const router = Router();

router.get("/", getScore);
router.post("/", postScore);
=======
const { Router } = require('express');
const { getScore, postScore,getScoreId } = require('../controllers/ScoreController');

const router = Router();

router.get('/', getScore)
router.post('/', postScore)
router.get('/scores',getScoreId)
>>>>>>> develop

module.exports = router;
