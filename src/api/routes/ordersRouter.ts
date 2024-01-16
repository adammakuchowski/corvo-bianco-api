import express from 'express'
import withAsyncHandler from 'express-async-handler'

import {validationRequest} from '../../middlewares/validationRequest'
import {
  createOrder,
  testOrdersRoute
} from '../controllers/ordersController'
import {newOrderSchema} from '../../validators/ordersValidation'

const router = express.Router()

router.post(
  '/createOrder',
  validationRequest(newOrderSchema),
  withAsyncHandler(createOrder)
)

router.get(
  '/testRoute',
  withAsyncHandler(testOrdersRoute)
)

router.post(
  '/testRoute',
  withAsyncHandler(testOrdersRoute)
)

export default router
