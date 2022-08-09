const { Router } = require("express");

const router = Router();

const user = require("./UserRoutes.js");
const beer = require("./BeerRoutes.js");
const seller = require("./SellerRoutes");
const purchases = require("./PurchasesRoutes");
const comment = require("./CommentRoutes");
const score = require("./ScoreRoutes");
const support = require("./SupportRoutes");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/user", user);
router.use("/beer", beer);
router.use("/seller", seller);
router.use("/purchases", purchases);
router.use("/score", score);
router.use("/comment", comment);
router.use("/support", support);

module.exports = router;
