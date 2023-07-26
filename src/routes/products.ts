import express from 'express'
import {
  getAllProducts,
} from '../services/productsService'

const router = express.Router()

router.get('/getAllProducts', getAllProducts)

export default router
