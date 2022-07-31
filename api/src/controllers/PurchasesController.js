const axios = require("axios");

const { Seller, Beer, Purchases, User } = require("../db.js");

async function postPurchases(req, res, next) {
  const { userId, purchaseDetails, totalPrice,  status } = req.body;
  try {
    const newPurchases = await Purchases.create({
      userId: userId,
      purchaseDetails: purchaseDetails,
      totalPrice: totalPrice,
      status: status,
    });
    
    let beer = await Beer.findAll({ where: { id: purchaseDetails } ,include:{model: Seller}});
    newPurchases.addBeer(beer);
    const purchases = Purchases.findAll({
       where: {id: newPurchases.id},
       include: {model: Beer,
        include: {model: Seller}}});
    res.send(purchases);
  } catch (error) {
    next(error);
  }
}

async function getAllPurchases(req, res, next) {
  try {
    const UsersDb = await Purchases.findAll({
      order: [["id", "ASC"]],
      include: [{ model: Beer,
        include: {model: Seller}}, { model: User}]
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
