const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Score, User } = require('../db.js')

async function getScore(req, res, next) {
    try {
        const { score } = req.body
        const beers = await Score.findAll(/* {
            where: {
                score: score,
            },
        } */);
        return res.json(beers);
    } catch (error) {
        next(error)
    }
}

async function postScore(req, res, next) {
    try {
        const { score, userId, beerId } = req.body
        const newScore = await Score.findOrCreate({
            where: {
                score: score,
                userId: userId,
                beerId: beerId
            },
        });
        // if (create === false) {
        //     res.status(400).send('Ya esta calificado');
        // } if {
            res.status(200).send(newScore);
        // }
    } catch (error) {
        next(error)
    }
}

async function postScore(req, res, next) {
    const { score, userId, beerId } = req.body
    try {
        const Userfound = await User.findByPk(userId)
        const scoreBeer = await Userfound.getScores({ where: { id: beerId } })
        if (scoreBeer.length == 0) {
            const newScore = await Score.findOrCreate({
                where: {
                    score: score,
                    userId: userId,
                    beerId: beerId
                },
            });
            res.send(newScore)
        }else{
           const scoreUpdate =  await Score.update({ score: score }, {
                where: {
                    userId: userId,
                    beerId: beerId
                }
               });
            res.send(scoreUpdate)
        }
    } catch (error) {
        next(error)
    }
}


  async function getScoreId(req, res, next) {
    const { idUser, idBeer } = req.query;
    let exist
    let scorees;
    try {
      const scores = await User.findByPk(idUser);
      const beer = await scores.getScores({ where: { id: idBeer } })
      console.log(beer)
      if (beer.length == 0) {
          exist = null
         res.status(200).send(exist);
        }else{
            scorees = {score: beer[0].score}
            res.status(200).send(scorees);
        }     
    } catch (error) {
      next(error);
    }
  }

module.exports = {
    getScore,
    postScore,
    getScoreId
}