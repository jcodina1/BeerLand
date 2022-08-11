const { sendConfirmationEmail } = require("./Nodemaileer/Emails");
const nodemailer = require("nodemailer");
const axios = require("axios");
const { Seller, Beer, User, Purchases } = require("../db.js");

async function getAllUsers(req, res, next) {
  try {
    const UsersDb = await User.findAll({
      order: [["id", "ASC"]],
      include: Beer,
    });
    res.status(200).send(UsersDb);
  } catch (error) {
    next(error);
  }
}

async function postUser(req, res, next) {
  const { name, surname, address, email, rol, image } = req.body;
  try {
    let newUser = await User.findOrCreate({
      where: {
        name: name,
        surname: surname,
        address: address,
        email: email,
        rol: rol,
        image:image
      },
    });
    sendConfirmationEmail(name, email);
    return res.json(newUser);
  } catch (error) {
    next(error);
  }
}
async function getUserId(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id: id },
      include: Beer,
    });

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

async function postFavorite(req, res, next) {
  const { idUser, idBeer } = req.body;
  console.log(idUser, idBeer);
  try {
    let beer = await Beer.findAll({ where: { id: idBeer } });
    let user = await User.findOne({ where: { id: idUser } });
    const result = await user.addBeer(beer);
    let user2 = await User.findOne({ where: { id: idUser }, include: Beer });
    res.status(200).send(user2);
  } catch (error) {
    next(error);
  }
}

async function deleteFavorite(req, res, next) {
  const { idUser, idBeer } = req.query;

  try {
    const user = await User.findByPk(idUser, { include: Beer });
    await user.removeBeer(idBeer);
    let final = await User.findByPk(idUser, { include: Beer });
    res.status(200).send(final.beers);
  } catch (error) {
    next(error);
  }
}

async function Favorites(req, res, next) {
  const { idUser, idBeer } = req.query;
  let exist = true;
  try {
    const Userfound = await User.findByPk(idUser);
    const beer = await Userfound.getBeers({ where: { id: idBeer } });
    if (beer.length == 0) {
      exist = false;
    }
    res.send(exist);
  } catch (error) {
    next(error);
  }
}

async function getUserFav(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id: id },
      include: Beer,
    });
    res.status(200).send(user.beers);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { id } = req.params;
  const { name, surname, address, email, image } = req.body;
  try {
    const user = await User.findByPk(id);
    user.name = name;
    user.surname = surname;
    user.address = address;
    user.email = email;
    user.image = image;
    await user.save();
    res.send("update");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers,
  postUser,
  getUserId,
  postFavorite,
  deleteFavorite,
  Favorites,
  getUserFav,
  updateUser,
};
