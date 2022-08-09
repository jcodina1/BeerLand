const axios = require("axios");
const { sendConfirmationPurchases } = require("./Nodemaileer/Emails");

const { Seller, Beer, Purchases, User } = require("../db.js");

async function postPurchases(req, res, next) {
  const {
    userId,
    purchaseDetails,
    beerId,
    totalPrice,
    status,
    address,
    email,
  } = req.body;
  console.log(
    userId,
    purchaseDetails,
    beerId,
    totalPrice,
    status,
    address,
    email
  );
  try {
    const newPurchases = await Purchases.create({
      userId: userId,
      purchaseDetails: purchaseDetails,
      beerId: beerId,
      totalPrice: totalPrice,
      status: status,
      address: address,
    });
    purchaseDetails.forEach(async (item) => {
      let beer = await Beer.findAll({
        where: { id: item.beerId },
        include: { model: Seller },
      });
      newPurchases.addBeer(beer);
    });
    // let beer = await Beer.findAll({ where: { id: beerId }, include: { model: Seller } });
    // newPurchases.addBeer(beer);
    const purchases = Purchases.findAll({
      where: { id: newPurchases.id },
      include: { model: Beer, include: { model: Seller } },
    });
    console.log(email);
    sendConfirmationPurchases(email);
    res.send(newPurchases);
  } catch (error) {
    next(error);
  }
}

async function getAllPurchases(req, res, next) {
  try {
    const UsersDb = await Purchases.findAll({
      order: [["id", "ASC"]],
      include: [
        {
          model: Beer,
          include: { model: Seller },
        },
        { model: User },
      ],
    });

    res.status(200).send(UsersDb);
  } catch (error) {
    next(error);
  }
}

async function getAllPurchasesByUser(req, res, next) {
  const { userId } = req.query;
  try {
    const UsersDb = await Purchases.findAll({
      where: { userId: userId },
      order: [["id", "ASC"]],
      include: [
        {
          model: Beer,
          include: { model: Seller },
        },
        { model: User },
      ],
    });
    res.status(200).send(UsersDb);
  } catch (error) {
    next(error);
  }
}

async function getPurchasesBySeller(req, res, next) {
  const { sellerId } = req.query;
  try {
    const UsersDb = await Purchases.findAll({
      order: [["id", "ASC"]],
      include: [
        { model: Beer, where: { sellerId: sellerId } },
        { model: User },
      ],
    });

    res.status(200).send(UsersDb);
  } catch (error) {
    next(error);
  }
}

async function updateStatus(req, res, next) {
  const { id, status } = req.query;
  try {
    let purchase = await Purchases.findByPk(id);
    purchase.status = status;
    await purchase.save();
    res.send(purchase);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postPurchases,
  getAllPurchases,
  getAllPurchasesByUser,
  getPurchasesBySeller,
  updateStatus,
};
