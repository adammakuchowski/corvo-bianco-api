import express from 'express'
import withAsyncHandler from 'express-async-handler'

import {
  createProduct,
  getAllProducts,
  testProductsRoute
} from '../controllers/productsController'
import {newProductSchema} from '../../validators/productsValidation'
import {validationRequest} from '../../middlewares/validationRequest'

const router = express.Router()

router.get(
  '/getAllProducts',
  withAsyncHandler(getAllProducts)
)

router.post(
  '/createProduct',
  validationRequest(newProductSchema),
  withAsyncHandler(createProduct)
)

router.get(
  '/testRoute',
  withAsyncHandler(testProductsRoute)
)

router.post(
  '/testRoute',
  withAsyncHandler(testProductsRoute)
)

export default router
