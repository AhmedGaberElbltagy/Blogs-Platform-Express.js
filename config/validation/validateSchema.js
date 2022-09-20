const joi = require('joi');
const createHttpError = require('http-errors');

const validateSchema = (schema) => {
    return (req, res, next) => {
      var validation = [];
      var validationResult = schema.body.validate(req.body);
      if (validationResult.error) {
        validation.push(validationResult.error.details[0].message)
      }
      if (validation.length) {
        res.json({message:validation.join()})
        return
      }
      next();
    }
  }
module.exports = validateSchema;
    