const axios = require("axios");

const { Seller, Beer, Purchases } = require("../db.js");

async function postPurchases(req, res, next) {
  const { userId, purchaseDetails, totalPrice,  status } = req.body;
  try {
    const newPurchases = await Purchases.create({
      userId: userId,
      purchaseDetails: purchaseDetails,
      totalPrice: totalPrice,
      status: status,
    });
    let beer = await Beer.findAll({ where: { id: beerId } ,include:{model: Seller}});
    newPurchases.addBeer(beer);
    res.send(newPurchases);
  } catch (error) {
    next(error);
  }
}

async function getAllPurchases(req, res, next) {
  try {
    const UsersDb = await Purchases.findAll({
      order: [["id", "ASC"]],
      include: { model: Beer },  
    });

    res.status(200).send(UsersDb);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postPurchases,
  getAllPurchases,
};
