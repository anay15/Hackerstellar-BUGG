const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { emailExists } = require("../helpers/databaseValidators");
const validateFields = require("../middlewares/validateFields");
const validateJWT = require("../middlewares/validateJWT");
const router = Router();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const service = client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID);

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("name", "Name length must be max 32 characters").isLength({
      max: 32,
    }),
    check("email", "Invalid email").isEmail(),
    check(
      "password",
      "Password should be between 8-32 characters and should include 1 number, 1 symbol, 1 lowercase and 1 uppercase."
    ).isStrongPassword(),
    check("password", "Password should be between 8-32 characters.").isLength({
      max: 32,
    }),
    validateFields,
    emailExists,
  ],
  createUser
);

router.post(
  "/login",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Password is required.").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

router.get("/renew", validateJWT, renewToken);

router.post("/verify-phone-number", async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: phoneNumber, channel: "sms" });
    res.json({ success: true, message: "Verification sent!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Verification failed." });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { phoneNumber, code } = req.body;
  try {
    const verificationCheck = await client.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phoneNumber, code });
    if (verificationCheck.status === "approved") {
      // log the user in
      res.json({ success: true, message: "OTP verified!" });
    } else {
      res.json({ success: false, message: "OTP verification failed." });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "OTP verification failed." });
  }
});

module.exports = router;
