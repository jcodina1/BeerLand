const axios = require('axios')
const { Op } = require('sequelize')
const {Beer} = require('../db.js')

async function createdAllBeers(req, res, next) {
    try {
        const beers = await axios.get('https://beerland.docuraillustration.com/api/cervezas-lider.json')
        const beersData = beers.data.cervezas
               await beersData.forEach((b) => {
            Beer.findOrCreate({
                where: {
                    name: b.name ? b.name : "no hay",
                    description: b.description ? b.description : "no hay",
                    regularPrice: b.regularPrice ? b.regularPrice : "no hay",
                    currentPrice: b.currentPrice ? b.currentPrice : "no hay",
                    image: b.image ? b.image : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                }
            })
        })
        res.status(200).send('Se guardo en la DB')
        
    } catch (error) {
        next(error)
    }
}


async function getAllBeers(req,res,next){
    try {
        const beers= await Beer.findAll()
        res.send(beers)
    } catch (error) {
        next(error)
    }
}

async function postAllBeers(req, res, next) {
    const { name, stock, description, origin, seller, brewery, vegan, gluten, img } = req.body
    try {
        const [createBeer, created] = await Activity.findOrCreate({
            where: { name: { [Op.iLike]: `%${name}%` } },
            defaults: {
                name: name,

            }
        })
        if (created === true) {
            res.status(200).send(createBeer)
        } else res.send({ Msg: 'Beer was created' })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdAllBeers,
    postAllBeers,
    getAllBeers
}