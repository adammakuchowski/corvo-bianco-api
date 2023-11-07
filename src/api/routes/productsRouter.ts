import express from 'express'

import {
  createProduct,
  getAllProducts,
  productsTestRoutes,
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
  '/test',
  productsTestRoutes,
)

export default router
