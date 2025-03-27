const Joi = require('joi');

const userValidationSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(50)
        .required(),
    
    lastName: Joi.string()
        .min(2)
        .max(50)
        .required(),
    
    email: Joi.string()
        .email()
        .required(),

    age: Joi.number()
        .min(18)
        .max(120)
        .optional()
});

module.exports = {
    userValidationSchema,
};