const axios = require('axios')
const { Seller, Beer, User, Purchases } = require('../db.js')

async function getAllUsers(req, res, next) {
    try {
        const UsersDb = await User.findAll()
        res.status(200).send(UsersDb)
    } catch (error) {
        next(error)
    }
}

async function postUser(req, res, next) {
    const { id, name, surname, address } = req.body;
    try {
        let newUser = await User.create(
            {
                id,
                name,
                surname,
                address,
            },
            {
                fields: ["id", "name", "surname", "address"],
            }
        );
        return res.json(newUser);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    postUser
}