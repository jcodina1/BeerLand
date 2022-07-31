const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Score, User } = require('../db.js')

async function getScore(req, res, next) {
  try {
    const { score } = req.query;
    const beers = await Beer.findAll({
      where: {
        score: score,
      },
      /* limit: 5 */
    });
    return res.json(beers);
  } catch (error) {
    next(error);
  }
}

// async function postScore(req, res, next) {
//     try {
//         const { score, userId, beerId } = req.body
//         const newScore = await Score.findOrCreate({
//             where: {
//                 score: score,
//                 userId: userId,
//                 beerId: beerId
//             },
//         });
//         // if (create === false) {
//         //     res.status(400).send('Ya esta calificado');
//         // } if {
//             res.status(200).send(newScore);
//         // }
//     } catch (error) {
//         next(error)
//     }
// }

async function postScore(req, res, next) {
    const { score, userId, beerId } = req.body
    try {
        const Userfound = await User.findByPk(userId)
        const scoreBeer = await Userfound.getScores({ where: { beerId: beerId } })
        if (scoreBeer.length == 0) {
            const newScore = await Score.findOrCreate({
                where: {
                    userId: userId,
                    beerId: beerId,
                    score: score,
                },
            });
            console.log(newScore, 'hizo post')
            res.send(newScore)
        }else{
            console.log(score,userId,beerId)
           const scoreUpdate =  await Score.update({ score: score }, {
            where: {
                userId: userId,
                beerId: beerId,
            }
           });
            console.log(scoreUpdate, 'hizo update')
            res.send(scoreUpdate)
        }
    } catch (error) {
        next(error)
    }
  
}


  async function getScoreId(req, res, next) {
    const { idUser, idBeer } = req.query;
    try {
      const scores = await User.findByPk(idUser);
      const beer = await scores.getScores({ where:{beerId:idBeer } })
      if (beer.length == 0) {
          const exist = null
         res.status(200).send(exist);
        }else{
           const scorees = {score: beer[0].score}
           console.log(scorees)
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
