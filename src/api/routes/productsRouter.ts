import express from 'express'

import {
  createProduct,
  getAllProducts,
  testProductsRoute,
} from '../controllers/productsController'
import {newProductSchema} from '../../validators/productsValidation'
import {validationRequest} from '../../middlewares/validationRequest'

const router = express.Router()

router.get(
  '/getAllProducts',
  getAllProducts,
)

router.post(
  '/createProduct',
  validationRequest(newProductSchema),
  createProduct,
)

router.get(
  '/testRoute',
  testProductsRoute,
)

export default router
