const { Router } = require("express");

const {
  postComment, 
  getAllCommentBeer
} = require("../controllers/CommentController");

const router = Router();

router.post("/beer/:beerId", postComment);
router.get("/beer/:beerId", getAllCommentBeer);


module.exports = router;
