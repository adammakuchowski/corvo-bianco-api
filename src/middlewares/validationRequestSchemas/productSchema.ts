import Joi from 'joi'

export default Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  brand: Joi.string().required(),
  quality: Joi.number().required(),
  category: Joi.string().required(),
  typ: Joi.string().required(),
  color: Joi.string().required(),
  productionYear: Joi.string().required(),
  countryOfOrigin: Joi.string().required(),
  img: Joi.any().required(),
  price: Joi.number().required(),
})
