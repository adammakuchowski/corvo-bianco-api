import {Document} from 'mongoose'

import OrderModel from '../../db/models/orderModel'
import {Order} from '../../interfaces/commonTypes'

export const createNewOrder = async (order: Order): Promise<Document> => {
  const newOrder = new OrderModel(order)
  const savedOrder = await newOrder.save()

  return savedOrder
}
