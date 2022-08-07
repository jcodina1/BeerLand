const axios = require("axios");
const { Seller, Beer } = require("../db.js");

async function postSellers(req, res, next) {
  const {id, name, description, mail, dni,rol } = req.body;
  try {
    let newSeller = await Seller.findOrCreate({
      where: {
        name: name,
        description: description,
        mail: mail,
        dni: dni,
        rol:rol
      },
    });
    return res.json(newSeller);
  } catch (error) {
    next(error);
  }
}

async function getAllSellers(req, res, next) {
  const { name } = req.query;
  try {
    const sellers = await axios.get(
      "https://beerland-42137-default-rtdb.firebaseio.com/seller/sellers.json"
    );
    const sellersData = sellers.data;
    await sellersData.forEach((b) => {
      Seller.findOrCreate({
        where: {
          name: b.name ? b.name : "It does not contain name",
          description: b.description
            ? b.description
            : "It does not contain description",
          mail: b.mail,
          image: b.image
            ? b.image
            : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
          dni: b.dni,
        },
        order: [["id", "ASC"]],
      });
    });
    const sellersDb = await Seller.findAll();
    if (name) {
      let SellerName = sellersDb.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      SellerName.length
        ? res.status(200).json(SellerName)
        : res.status(404).send("Seller not found");
    } else {
      const sellersDb = await Seller.findAll();
      res.status(200).send(sellersDb);
    }
  } catch (error) {
    next(error);
  }
}

async function getAllSellers2(req, res, next) {
  try {
    const sellers = await axios.get(
      "https://beerland-42137-default-rtdb.firebaseio.com/seller/sellers.json"
    );
    const sellersData = sellers.data;
    await sellersData.forEach((b) => {
      Seller.findOrCreate({
        where: {
          name: b.name ? b.name : "It does not contain name",
          description: b.description
            ? b.description
            : "It does not contain description",
          mail: b.mail,
          image: b.image
            ? b.image
            : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
          dni: b.dni,
        },
      });
    });
    const sellersDb = await Seller.findAll();
    console.log("ya se guardaron los seller");
  } catch (error) {
    next(error);
  }
}
async function getAllSellersId(req, res, next) {
  try {
    const {id}=req.params
  const sellersDb = await Seller.findByPk(id);
  res.send(sellersDb)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllSellers,
  postSellers,
  getAllSellers2,
  getAllSellersId
};
