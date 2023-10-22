import express from 'express'

import {
  createProduct,
  getAllProducts,
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

export default router
