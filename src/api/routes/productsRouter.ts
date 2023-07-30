import express from 'express'
import {
  createProduct,
  getAllProducts,
} from '../controllers/productsController'

const router = express.Router()


router.get('/getAllProducts', getAllProducts)

router.post('/createProduct', createProduct)

export default router
