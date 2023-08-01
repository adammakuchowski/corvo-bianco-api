import express from 'express'
import {
  createProduct,
  getAllProducts,
} from '../controllers/productsController'
import productSchema from '../../middlewares/validationRequestSchemas/productSchema'
import {validationRequest} from '../../middlewares/validationRequest'

const router = express.Router()


router.get('/getAllProducts', getAllProducts)

router.post('/createProduct', validationRequest(productSchema), createProduct)

export default router
