import mongoose from 'mongoose'

import {Order} from '../../interfaces/commonTypes'

const orderSchema = new mongoose.Schema<Order>({
  email: {type: String, required: true},
  name: {type: String, required: true},
  adress: {type: String, required: true},
  products: [{type: Object, required: true}],
  surname: {type: String, required: true},
  postalCode: {type: String, required: true},
  city: {type: String, required: true},
  country: {type: String, required: true},
  cardNumber: {type: String, required: true},
  cardDate: {type: String, required: true},
  cardCvc: {type: String, required: true},
  totalCostPrice: {type: Number, required: true},
}, {
  timestamps: true,
})

const OrderModel = mongoose.model<Order>('Order', orderSchema)

export default OrderModel
