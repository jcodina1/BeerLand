const nodemailer = require("nodemailer");
const config = require("./Auth")

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationPurchases = ( email) => {
  console.log("Check");
  transport.sendMail({
    from: user,
    to: email,
    subject: "Thank you for Buy in Beerland",
    html: `<h1>Confirmation Purchases</h1>
        <h2>Hello</h2>
        <p>Thank you for shopping at beerland. We hope you can enjoy your products.</p>
        <img src="https://cdn.discordapp.com/attachments/996059560638939161/1004562091367202886/Group_1.jpg">
        </div>`,
  }).catch(err => console.log(err));
};