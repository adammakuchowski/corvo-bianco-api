import OrderModel from '../../db/models/orderModel'
import {Order} from '../../interfaces/commonTypes'

export const createNewOrder = async (order: Order) => {
  const newOrder = new OrderModel(order)

  return newOrder.save()
}
