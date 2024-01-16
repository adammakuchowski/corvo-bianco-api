import {NextFunction, Request, Response} from 'express'

import {logger} from '../../app'
import {Order} from '../../interfaces/commonTypes'
import {createNewOrder} from '../services/ordersService'
import {canCreateDocument} from '../../db/mongoUtils'
import OrderModel from '../../db/models/orderModel'
import appConfig from '../../configs/appConfig'

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const order: Order = req.body
  const {database: {orderLimit}} = appConfig

  try {
    const canCreate = await canCreateDocument(OrderModel, orderLimit)
    if (!canCreate) {
      throw new Error('Limit of orders documents reached.')
    }

    const savedOrder = await createNewOrder(order)

    res
      .status(201)
      .json(savedOrder)
    logger.info('[createOrder]: Order saved')
  } catch (error: any) {
    logger.error(`[createOrder]: ${error.message}`)

    next(error)
  }
}

export const testOrdersRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {method, originalUrl} = req

  try {
    res
      .status(200)
      .json({
        method,
        originalUrl,
        message: 'Request successfully processed'
      })
  } catch (error: any) {
    logger.error(`[testOrdersRoute]: ${error.message}`)

    next(error)
  }
}
