const axios = require('axios')
const { Seller, Beer } = require('../db.js')

async function postSellers(req, res, next) {
  const { name, description, mail, password, dni } = req.body;
  try {
    let newSeller = await Seller.create(
      {
        name,
        description,
        mail,
        password,
        dni
      },
      {
        fields: ["name", "description", "mail", "password", "dni"],
      }
    );
    return res.json(newSeller);
  } catch (error) {
    next(error)
  }
}

async function getAllSellers(req, res, next) {
  try {
    let sellerdb = await Seller.findAll({
      include: { model: Beer }
    })
    res.status(200).json(sellerdb)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllSellers,
  postSellers
}