const { Router } = require('express');
const { getAllBeers } = require('../controllers/BeerController');
const { postComment, getComment, getAllComment, getAllCommentUser } = require('../controllers/CommentController');



const router = Router();

router.post('/', postComment)
router.get('/', getAllComment)
router.get('/:id', getComment)
router.get('/:beer', getAllBeers)
router.get('/:user', getAllCommentUser)

module.exports = router
