import {Request, Response} from 'express'

import {logger} from '../../../app'
import {Order} from '../../interfaces/commonTypes'
import {createNewOrder} from '../services/ordersService'
import {canCreateDocument} from '../../db/mongoUtils'
import OrderModel from '../../db/models/orderModel'
import appConfig from '../../configs/appConfig'

export const createOrder = async (req: Request<{}, {}, Order>, res: Response): Promise<void> => {
  const order = req.body
  const {database: {orderLimit}} = appConfig

  try {
    const canCreate = await canCreateDocument(OrderModel, orderLimit)
    if (!canCreate) {
      throw new Error('Limit of orders documents reached.')
    }
    
    const savedOrder = await createNewOrder(order)

    res.status(201)
    res.json(savedOrder)
    logger.info('[createOrder]: Order saved')
  } catch (error: any) {
    logger.error(`[createOrder]: ${error.message}`)
  }
}
