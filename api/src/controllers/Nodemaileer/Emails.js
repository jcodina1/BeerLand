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
},
console.log(user,pass));
module.exports.sendConfirmationEmail = (name, email) => {
  console.log("Check");
  transport.sendMail({
    from: user,
    to: email,
    subject: "Thank you for registering with Beerland",
    html: `<h1>Sign in</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        </div>`,
  }).catch(err => console.log(err));
};

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

module.exports.sendEmailSupport = (name, answer, email) => {
  console.log(email)
  console.log("Check");
  transport.sendMail({
    from: user,
    to: email,
    subject: "Thank you for submitting your question",
    html: `<h1>Confirmation Answer</h1>
        <h2>Hello, ${name}</h2>
        <p>${answer}</p>
        <img src="https://cdn.discordapp.com/attachments/996059560638939161/1004562091367202886/Group_1.jpg">
        </div>`,
  }).catch(err => console.log(err));
};