import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_DB: Joi.required(),
  DB_NAME: Joi.required(),
  PORT: Joi.number().default(3000),
});
