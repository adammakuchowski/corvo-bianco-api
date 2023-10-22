import express from 'express'

import {validationRequest} from '../../middlewares/validationRequest'
import {createOrder} from '../controllers/ordersController'
import {newOrderSchema} from '../../validators/ordersValidation'

const router = express.Router()

router.post(
  '/createOrder',
  validationRequest(newOrderSchema),
  createOrder,
)

export default router
