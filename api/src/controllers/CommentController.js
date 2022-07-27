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

async function getAllComentBeer(req, res, next) {
    const { beer } = req.params
    try {
        let comments = await Comment.findAll({where:{id:beer}})
        res.send(comments)
    } catch (error) {
        next()
    }
 }

async function getAllComentUser(req, res, next) {
    const { user } = req.params
    try {
        let comments = await Comment.findAll({where:{id:user}})
        res.send(comments)
    } catch (error) {
        next()
    }
 }

async function getAllComent(req, res, next) {
    try {
        
    } catch (error) {
        
    }
 }

async function postComment(req, res, next) {
    const { comment, userId, beerId } = req.body

    try {
        let newBeer = await Comment.findOrCreate({
            where: {
                comment: comment,
                userId: userId,
                beerId: beerId
            }
        });
        return res.json(newBeer);
        return res.json(newComment);
    } catch (error) {
        next()
    }
}
module.exports = {
    postComment,
    getAllComent,
    getAllComentBeer,
    getAllComentUser,
    getComment
}