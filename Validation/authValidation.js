const Joi = require("joi");

const passwordPattern = {
  lowercase: new RegExp("(?=.*[a-z])"),
  uppercase: new RegExp("(?=.*[A-Z])"),
  digit: new RegExp("(?=.*[0-9])"),
  specialChar: new RegExp("(?=.*[!@#$%^&*])"),
};

const messages = {
  username: {
    alphanum: "Username must only contain letters and numbers",
    min: "Username must be at least 3 characters long",
    max: "Username can not exceed 30 characters",
    required: "Username is required",
  },
  email: {
    invalid: "Enter a valid email address",
    required: "Email is required",
  },
  password: {
    min: "Password must be at least 8 characters long",
    max: "Password cannot exceed 30 characters",
    pattern:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)",
    required: "Password is required",
  },
  confirmPassword: {
    matchPassword: "Passwords do not match",
    required: "Confirm password is required",
  },
};

const usernameSchema = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .messages({
    "string.alphanum": messages.username.alphanum,
    "string.min": messages.username.min,
    "string.max": messages.username.max,
    "any.required": messages.username.required,
  });

const emailSchema = Joi.string()
  .email({ tlds: { allow: ["com", "net", "org"] } })
  .required()
  .messages({
    "string.email": messages.email.invalid,
    "any.required": messages.email.required,
  });

const passwordSchema = Joi.string()
  .min(8)
  .max(30)
  .pattern(passwordPattern.lowercase)
  .pattern(passwordPattern.uppercase)
  .pattern(passwordPattern.digit)
  .pattern(passwordPattern.specialChar)
  .required()
  .messages({
    "string.min": messages.password.min,
    "string.max": messages.password.max,
    "string.pattern.base": messages.password.pattern,
    "any.required": messages.password.required,
  });

const signUpSchema = Joi.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": messages.confirmPassword.matchPassword,
    "any.required": messages.confirmPassword.required,
  }),
});

const signInSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  signUpSchema,
  signInSchema,
};
