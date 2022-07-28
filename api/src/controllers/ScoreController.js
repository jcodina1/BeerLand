const axios = require("axios");
const { Op } = require("sequelize");
const { Beer, Score } = require("../db.js");

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

async function postScore(req, res, next) {
  try {
    const { score, userId, beerId } = req.body;
    const [newScore, create] = await Score.findOrCreate({
      where: {
        score: score,
        userId: userId,
        beerId: beerId,
      },
    });
    if (create === false) {
      res.status(400).send("Ya esta calificado");
    } else {
      res.status(200).send(newScore);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getScore,
  postScore,
};
