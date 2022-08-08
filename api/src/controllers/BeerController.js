const axios = require('axios')
const { Op } = require('sequelize')
const { Beer, Seller , Comment, Score} = require('../db.js')


async function createdAllBeers(req, res, next) {
    try {
        const beers = await axios.get('https://beerland-42137-default-rtdb.firebaseio.com/cervezas.json')
        const beersData = beers.data.cervezas
        await beersData.forEach((b) => {
            Beer.findOrCreate({
                where: {
                    name: b.name ? b.name : "It does not contain name",
                    description: b.description ? b.description : "It does not contain description",
                    price: b.price ? b.price : "It does not contain price",
                    stock: b.stock ? b.stock : "It does not contain stock",
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
        const beers = await axios.get('https://beerland-42137-default-rtdb.firebaseio.com/cervezas.json')
        const beersData = beers.data.cervezas
        await beersData.forEach((b) => {
            Beer.findOrCreate({
                where: {
                    name: b.name ? b.name : "It does not contain name",
                    description: b.description ? b.description : "It does not contain description",
                    price: b.price,
                    stock: b.stock,
                    grade: b.grade,
                    origin: b.origin ? b.origin : "España",
                    tipo: b.tipo ? b.tipo : 'No se le ha asignado tipo',
                    ibu: b.ibu,
                    image: b.image ? b.image : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                    sellerId: b.sellerid?b.sellerid:Math.floor(Math.random() * 51)
                },
                order:[['id','ASC']],
                

            })
        })
        const BeersDb = await Beer.findAll()
        if (name) {
            let BeerName = BeersDb.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            BeerName.length ?
                res.status(200).json(BeerName) :
                res.status(404).send('Beer not found');
        } else {
            const BeersDb = await Beer.findAll({include:{model:Seller}})
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
        res.status(200).send(Beerid)
    } catch (error) {
        res.send('Beer not found')
    }
}

async function updateBeer(req, res, next) {
    const { id } = req.params
    const { name, description, price, stock, image } = req.body
    try {
         const beer = await Beer.findByPk(id)
        beer.name = name
        beer.description = description
        beer.price = price
        beer.stock = stock
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
    const { name, description, price, stock, image, sellerId,tipo } = req.body;
    try {
        let newBeer = await Beer.findOrCreate({
                where:{
                    name: name ? name : "It does not contain name",
                    description: description ? description : "It does not contain description",
                    price: price?price:"12",
                    stock: stock?stock:10,                    
                    image: image ? image : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
                    sellerId: sellerId,
                    tipo: tipo ? tipo : "IPA",    
                }
            });
        return res.json(newBeer);
    } catch (error) {
        next(error)
    }
}


async function Beerbrewery(req, res, next) {
    const { sellerId } = req.query
    try {
      const beer = await Beer.findAll({ where: { sellerId: sellerId } })
      res.send(beer)
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
    Beerbrewery
    
}