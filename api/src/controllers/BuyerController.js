const axios= require('axios')

async function getAllBuyers(req,res,next){
try {
    res.status(200).send('This is the route to get all buyers')
} catch (error) {
    next(error)
}
}

module.exports={
    getAllBuyers
}