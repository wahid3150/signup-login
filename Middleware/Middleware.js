const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((details) => details.message);
    return res.status(400).json({ error: errorMessages });
  }
  next();
};

module.exports = validateRequest;
