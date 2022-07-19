const axios= require('axios')
const Seller = require('../models/Seller')

async function getAllSeller(req,res,next){
try {
    const sellers= await Seller.findAll()
    res.status(200).send(sellers)
} catch (error) {
    next(error)
}
}

module.exports={
    getAllSeller
}