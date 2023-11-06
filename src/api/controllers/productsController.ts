import {Request, Response} from 'express'

import {logger} from '../../../app'
import {Product} from '../../interfaces/commonTypes'
import {createNewProduct, findAllProducts} from '../services/productsService'
import ProductModel from '../../db/models/productModel'
import {canCreateDocument} from '../../db/mongoUtils'
import appConfig from '../../configs/appConfig'

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const resault = await findAllProducts()

    res.status(200)
    res.json(resault)
  } catch (error: any) {
    logger.error(`[getAllProducts]: ${error.message}`)
  }
}

export const createProduct = async (req: Request<{}, {}, Product>, res: Response): Promise<void> => {
  const product = req.body
  const {database: {productLimit}} = appConfig

  try {
    const canCreate = await canCreateDocument(ProductModel, productLimit)
    if (!canCreate) {
      throw new Error('Limit of products documents reached.')
    }

    const savedProduct = await createNewProduct(product)
    res.status(201)
    res.json(savedProduct)
    logger.info('[createProduct]: Product saved')
  } catch (error: any) {
    logger.error(`[createProduct]: ${error.message}`)
  }
}
