const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Score } = require('../db.js')

async function getScore(req, res, next) {
    try {
        const { score } = req.query
        const beers = await Beer.findAll({
            where: {
                score: score,
            },
            /* limit: 5 */
        });
        return res.json(beers);
    } catch (error) {
        next(error)
    }
}

async function postScore(req, res, next) {
    try {
        const { score, beerId, userId } = req.body
        const newScore = await Score.findOrCreate({
            where: {
                score: score,
                userId: userId,
                beerId: beerId
            },
            /* limit: 5 */
        });
        res.status(200).send(newScore);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getScore,
    postScore,
}