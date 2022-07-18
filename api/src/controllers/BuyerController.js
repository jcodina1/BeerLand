const axios= require('axios')

async function getAllBuyers(req,res,next){
try {
    res.status(200).send('Esta es la ruta para obtener todas los compradores')
} catch (error) {
    next(error)
}
}

module.exports={
    getAllBuyers
}