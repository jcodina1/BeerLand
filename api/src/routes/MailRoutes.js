const { Router } = require("express");
const router = Router();
const { emailSender } = require("../controllers/MailController");
router.post("/", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    emailSender({ fullName, email, message });
    res.json({ msg: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

module.exports = router;
