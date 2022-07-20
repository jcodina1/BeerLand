const axios = require('axios')
const { Op, where } = require('sequelize')
const { Beer, Seller } = require('../db.js')


async function createdAllBeers(req, res, next) {
    try {
        const beers = await axios.get('http://localhost:3001/')
        const beersData = beers.data
        await beersData.forEach((b) => {
            Beer.findOrCreate({
                where: {
                    name: b.name ? b.name : "It does not contain name",
                    description: b.description ? b.description : "It does not contain description",
                    regularPrice: b.regularPrice ? b.regularPrice : "It does not contain regularPrice",
                    currentPrice: b.currentPrice ? b.currentPrice : "It does not contain currentPrice",
                    image: b.image ? b.image : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                    sellerId: b.sellerid
                }
            })
        })
        res.status(200).send('Saved correctly in DB')
    } catch (error) {
        next(error)
    }
}


async function getAllBeers(req, res, next) {
    const { name } = req.query
    try {
        const BeersDb = await Beer.findAll()
        if (name) {
            let BeerName = BeersDb.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            BeerName.length ?
                res.status(200).json(BeerName) :
                res.status(404).send('Beer not found');
        } else {
            res.status(200).send(BeersDb)
        }
    } catch (error) {
        next(error)
    }
}



/* const getBeerID =  */
async function getBeerID(req, res, next) {
    const { id } = req.params
    try {
        const Beerid = await Beer.findOne({ where: { id: id } })
        console.log(Beerid)
        res.status(200).send(Beerid)
    } catch (error) {
        res.send('Beer not found')
    }
}




async function updateBeer(req, res, next) {
    const { id } = req.params
    const { name, description, regularPrice, currentPrice, image } = req.body
    try {
        beer = await Beer.findByPk(id)
        beer.name = name
        beer.description = description
        beer.regularPrice = regularPrice
        beer.currentPrice = currentPrice
        beer.image = image
        await beer.save()
        res.send('update')
    } catch (error) {
        next(error)
    }
}

async function deleteBeer(req, res, next) {
    let { id } = req.query
    await Beer.destroy({
        where: { id: id }
    })
    res.status(200).send('Beer delete correctly')
}

async function postBeer(req, res, next) {
    const { name, description, regularPrice, currentPrice, image, idseller } = req.body;
    try {
        let newBeer = await Seller.create(
            {
                name,
                description,
                regularPrice,
                currentPrice,
                image,
            },
            {
                fields: ["name", "description", "regularPrice", "currentPrice", "image"],
            }
        );
        return res.json(newBeer);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdAllBeers,
    getAllBeers,
    getBeerID,
    postBeer,
    updateBeer,
    deleteBeer,
}