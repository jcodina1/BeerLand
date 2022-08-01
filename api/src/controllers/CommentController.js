const axios = require("axios");
const { Op } = require("sequelize");
const { Beer, Seller, Comment,User } = require("../db.js");



async function getAllCommentBeer(req, res, next) {
  const { beerId } = req.params;
  try {
    let comments = await Comment.findAll({ where: { beerId: beerId },include:User });
    res.send(comments);
  } catch (error) {
    next();
  }
}



async function postComment(req, res, next) {
  const{ beerId}=req.params
  const { comment, userId } = req.body;

  try {
    let [newComment, create] = await Comment.findOrCreate({
      where: {
        comment: comment,
        userId: userId,
        beerId: beerId,
      },
    });
    if (!create) {
      res.status(200).send("El comentario ya esta");
    } else {
      return res.json(newComment);
    }
  } catch (error) {
    next(error);
  }
}
module.exports = {
  postComment,
  getAllCommentBeer, 
  
};
