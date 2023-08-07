import Joi from 'joi'
import {Order} from '../interfaces/commonTypes'

export const newOrderSchema = Joi.object<Order>({
  email: Joi.string().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  adress: Joi.number().required(),
  products: Joi.array().items(Joi.string().required()),
  postalCode: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  cardNumber: Joi.string().required(),
  cardDate: Joi.string().required(),
  cardCvc: Joi.string().required(),
})
