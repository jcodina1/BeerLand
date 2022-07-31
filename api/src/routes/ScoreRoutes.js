
const { Router } = require('express');
const { getScore, postScore,getScoreId } = require('../controllers/ScoreController');

const router = Router();

router.get('/', getScore)
router.post('/', postScore)
router.get('/scores',getScoreId)

module.exports = router;
