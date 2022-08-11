require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const Comments = require("./models/Comment");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Beer, Seller, Purchases, User, Comment, Score, Support } = sequelize.models;

// Aca vendrian las relaciones

////////////////////////////Relacion Seller-Beer///////////////////
Seller.hasMany(Beer, { foreignKey: "sellerId", sourceKey: "id" });
Beer.belongsTo(Seller, { foreignKey: "sellerId", targetId: "id" });
///////////////////////////////////////////////////////////////////

////////////////////////////Relacion PurchasesBeer///////////////////
Purchases.belongsToMany(Beer, { through: "PurchasesBeer" });
Beer.belongsToMany(Purchases, { through: "PurchasesBeer" });
/////////////////////////////////////////////////////////////////////

////////////////////////////Relacion UserPurchases///////////////////
User.hasMany(Purchases, { foreignKey: "userId", sourceKey: "id" });
Purchases.belongsTo(User, { foreignKey: "userId", targetId: "id" });
/////////////////////////////////////////////////////////////////////

////////////////////////////Relacion Favoritos///////////////////
User.belongsToMany(Beer, { through: "Favorites" });
Beer.belongsToMany(User, { through: "Favorites" });
///////////////////////////////////////////////////////////////////

////////////////////////////Relacion UserComment///////////////////
User.hasMany(Comment, { foreignKey: "userId", sourceKey: "id" });
Comment.belongsTo(User, { foreignKey: "userId", targetId: "id" });
//////////////////////////////////////////////////////////////////

////////////////////////////Relacion BeerComment//////////////////
Beer.hasMany(Comment, { foreignKey: "beerId", sourceKey: "id" });
Comment.belongsTo(Beer, { foreignKey: "beerId", targetId: "id" });
//////////////////////////////////////////////////////////////////

////////////////////////////Relacion UserScore////////////////////
User.hasMany(Score, { foreignKey: "userId", sourceKey: "id" });
Score.belongsTo(User, { foreignKey: "userId", targetId: "id" });
//////////////////////////////////////////////////////////////////

////////////////////////////Relacion BeerScore///////////////////
Beer.hasMany(Score, { foreignKey: "beerId", sourceKey: "id" });
Score.belongsTo(Beer, { foreignKey: "beerId", targetId: "id" });
/////////////////////////////////////////////////////////////////
Support.belongsTo(User);
User.hasMany(Support);
/////////////////////////////////////////////////////////////////

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
