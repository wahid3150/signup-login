const express = require("express");
const { registerUser, loginUser } = require("../Controllers/authController");
const { signUpSchema, signInSchema } = require("../Validation/authValidation");
const validateRequest = require("../Middleware/Middleware");

const router = express.Router();

router.post("/signup", validateRequest(signUpSchema), registerUser);
router.post("/login", validateRequest(signInSchema), loginUser);

module.exports = router;
