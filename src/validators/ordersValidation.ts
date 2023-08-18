import Joi from 'joi'
import {Order, OrderProduct} from '../interfaces/commonTypes'

const orderProduct = {
  objectId: Joi.string().required(),
  quantity: Joi.number().required(),
}

export const newOrderSchema = Joi.object<Order>({
  email: Joi.string().required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  adress: Joi.string().required(),
  products: Joi.array().items(Joi.object<OrderProduct>(orderProduct).required()),
  postalCode: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  cardNumber: Joi.string().required(),
  cardDate: Joi.string().required(),
  cardCvc: Joi.string().required(),
})
