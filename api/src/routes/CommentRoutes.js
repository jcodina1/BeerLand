const { Router } = require('express');

const { postComment, getComment, getAllComment, getAllCommentUser } = require('../controllers/CommentController');



const router = Router();

router.post('/',postComment)
router.get('/',getAllComment)
router.get('/:id',getComment)
router.get('/:user',getAllCommentUser)

module.exports = router
