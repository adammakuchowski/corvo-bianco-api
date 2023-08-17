import {Request, Response} from 'express'
import {logger} from '../../app'
import {Order} from '../../interfaces/commonTypes'
import {createNewOrder} from '../services/ordersService'

export const createOrder = async (req: Request<{}, {}, Order>, res: Response): Promise<void> => {
  const order = req.body

  try {
    await createNewOrder(order)

    res.status(201)
    res.json(order)
    logger.info('Order saved')
  } catch (error: any) {
    logger.error('[createOrder] error:', error.message)
  }
}
