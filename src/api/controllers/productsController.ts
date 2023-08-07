import {Request, Response} from 'express'
import {Product} from '../../interfaces/commonTypes'
import {createNewProduct, findAllProducts} from '../services/productsService'

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const resault = await findAllProducts()

    res.status(200)
    res.json(resault)
  } catch (error: any) {
    console.error('[getAllProducts] error:', error.message)
  }
}

export const createProduct = async (req: Request<{}, {}, Product>, res: Response): Promise<void> => {
  const product = req.body

  try {
    await createNewProduct(product)

    res.status(201)
    res.json(product)
    console.info('Product saved')
  } catch (error: any) {
    console.error('[createProduct] error:', error.message)
  }
}
