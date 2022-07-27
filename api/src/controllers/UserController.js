const axios = require('axios')
const { Seller, Beer, User, Purchases,Comment } = require('../db.js')

async function getAllUsers(req, res, next) {
    try {
        const UsersDb = await User.findAll({
            order:[['id','ASC']],
            include: Beer
        })
        res.status(200).send(UsersDb)
    } catch (error) {
        next(error)
    }
}

async function postUser(req, res, next) {

    const { id, name, surname, address, email, rol } = req.body;
    try {
        let newUser = await User.create(
            {
                name,
                surname,
                address,
                email,
                rol
            },
            {
                fields: ["id", "name", "surname", "address", "email", "rol"],
            }
            );
        return res.json(newUser);
    } catch (error) {
        next(error)
    }
}
 async function getUserId(req,res,next){
    const {id}=req.params
    try {
        const user= await User.findOne({
            where:{id:id},
            include:Beer    
        })
        
        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
 }

async function postFavorite(req, res, next) {
    const { idUser, idBeer } = req.body
    try {
        let beer = await Beer.findAll({where: { id: idBeer}})
        let user = await User.findOne({where: { id: idUser}})
        const result = await user.addBeer(beer)
        let user2 = await User.findOne({where: { id: idUser}, include: Beer})
        res.status(200).send(user2)
    } catch (error) {
        next(error)
    }
}
async function deleteFavorite(req,res,next){
    const {idUser, idBeer}=req.body
    try {
        let beer = await Beer.findAll({where: { id: idBeer}})
        let user = await User.findOne({where: { id: idUser}})
        await user.removeBeer(beer)
        res.status(200).send("Se elimino de favoritos")
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllUsers,
    postUser,
    getUserId,
    postFavorite,
    deleteFavorite

}