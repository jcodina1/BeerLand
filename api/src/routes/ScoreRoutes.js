const { Router } = require('express');
const { getScore, postScore} = require('../controllers/ScoreController');

const router = Router();

router.get('/', getScore)
router.post('/', postScore)

module.exports = router;