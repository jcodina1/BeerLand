const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Seller, Comment } = require('../db.js')

async function getComment(req, res, next) {
    const { id } = req.params
    try {
        let comment = await Comment.findByPk(id)
        res.send(comment)
    } catch (error) {
        next()
    }
}

async function getAllCommentBeer(req, res, next) {
    const { beer } = req.params
    try {
        let comments = await Comment.findAll({ where: { id: beer } })
        res.send(comments)
    } catch (error) {
        next()
    }
}

async function getAllCommentUser(req, res, next) {
    const { user } = req.params
    try {
        let comments = await Comment.findAll({ where: { id: user } })
        res.send(comments)
    } catch (error) {
        next(error)
    }
}

async function getAllComment(req, res, next) {
    try {
        let comments = Comment.findAll()
        res.status(200).send(comments)
    } catch (error) {
        next(error)
    }
}

async function postComment(req, res, next) {
    const { comment, userId, beerId } = req.body

    try {
        let [newComment, create] = await Comment.findOrCreate({
            where: {
                comment: comment,
                userId: userId,
                beerId: beerId
            }
        });
        if (!create) {
            return res.json(newComment);
        } else {
            res.status(200).send("El comentario ya esta")
        }

    } catch (error) {
        next(error)
    }
}
module.exports = {
    postComment,
    getAllComment,
    getAllCommentBeer,
    getAllCommentUser,
    getComment
}