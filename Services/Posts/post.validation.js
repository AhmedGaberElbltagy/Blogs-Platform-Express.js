const joi = require("joi");


const CreatepostSchema = {
    body: joi.object().required().keys({
        title: joi.string().required(),
        description:joi.string().required(),
        image:joi.string().optional(),
        creator:joi.string().optional()
    })
}
const updatepostSchema = { 
    params: joi.object().required().keys({
        id: joi.string().required(),
            }),
            body: joi.object().keys({
              title: joi.string().optional(),
              description: joi.string().optional(),
              picture: joi.string().optional(),
            }),
}
module.exports = { updatepostSchema , CreatepostSchema }
