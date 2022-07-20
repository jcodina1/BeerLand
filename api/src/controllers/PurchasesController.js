const axios = require('axios');

const { Seller, Beer, Purchases } = require('../db.js')

async function postPurchases(req, res, next) {
    const { id, userId } = req.body;
    try {
        let newPurchases = await Purchases.create(
            {
                id,
                userId
            },
            {
                fields: ["id", "userId"],
            }
        );

        return res.json(newPurchases);
    } catch (error) {
        next(error)
    }
}
async function getAllPurchases(req, res, next) {
    try {
        const UsersDb = await User.findAll()
        res.status(200).send(UsersDb)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    postPurchases,

}