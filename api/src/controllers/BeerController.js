const axios= require('axios')
const{Op}= require('sequelize')
const Beer = require('../db.js')

async function getAllBeers(req,res,next){
try {
    res.status(200).send('Esta es la ruta para obtener todas las Beers')
} catch (error) {
    next(error)
}
}

async function postAllBeers(req,res,next){
    const {name,stock,description,origin,seller,brewery,vegan,gluten,img}= req.body
    try {
        const [createBeer,created]=await Activity.findOrCreate({
            where:{name:{[Op.iLike]:`%${name}%`}},
            defaults:{
            name:name,
            stock:stock,
            description:description,
            origin:origin,
            seller:seller,
            brewery:brewery,
            vegan:vegan,
            gluten:gluten,
            img:img
        }
        })
            if (created===true) {                
                res.status(200).send(createBeer)
            }else res.send({Msg:'Beer was created'})
    } catch (error) {
        next(error)
    }
    }

module.exports={
    getAllBeers,
    postAllBeers
}