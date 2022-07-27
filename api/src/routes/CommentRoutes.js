const { Router } = require('express');
const { getAllBeers } = require('../controllers/BeerController');
const { postComment, getComment, getAllComent, getAllComentUser } = require('../controllers/CommentController');



const router = Router();

router.post('/',postComment)
router.get('/',getAllComent)
router.get('/:id',getComment)
router.get('/:beer',getAllBeers)
router.get('/:user',getAllComentUser)

module.exports = router
