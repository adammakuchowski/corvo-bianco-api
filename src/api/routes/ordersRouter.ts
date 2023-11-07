import express from 'express'

import {validationRequest} from '../../middlewares/validationRequest'
import {
  createOrder,
  ordersTestRoutes
} from '../controllers/ordersController'
import {newOrderSchema} from '../../validators/ordersValidation'

const router = express.Router()

router.post(
  '/createOrder',
  validationRequest(newOrderSchema),
  createOrder,
)

router.get(
  '/test',
  ordersTestRoutes,
)

export default router
