const { Router } = require("express");

const user = require("./UserRoutes.js");
const beer = require("./BeerRoutes.js");
const seller = require("./SellerRoutes");
const purchases = require("./PurchasesRoutes");
const comment = require("./CommentRoutes");
const score = require("./ScoreRoutes");
const support = require("./SupportRoutes");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
Router.use("/user", user);
Router.use("/beer", beer);
Router.use("/seller", seller);
Router.use("/purchases", purchases);
Router.use("/score", score);
Router.use("/comment", comment);
Router.use("/support", support);

module.exports = router;
