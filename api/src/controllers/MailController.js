const nodemailer = require("nodemailer");

function Email(options) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "vivianne18@ethereal.email",
      pass: "gVkWQBU8gZuCeevgen",
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

function emailSender({ fullName, email, message }) {
  const mailInfo = {
    from: "Beerland",
    to: email,
    subject: "Confirmacion de tu compra en Beerland",
    html: `<p>${message}</p>`,
  };
  Email(mailInfo);
}

module.exports = {
  emailSender,
};
