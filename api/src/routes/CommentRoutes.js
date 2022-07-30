const { Router } = require("express");

const {
  postComment,
  getComment,
  getAllComment,
  getAllCommentUser,
  getAllCommentBeer,
} = require("../controllers/CommentController");

const router = Router();

router.post("/beer/:beerId", postComment);
router.get("/", getAllComment);
router.get("/:id", getComment);
router.get("/:user", getAllCommentUser);

module.exports = router;
