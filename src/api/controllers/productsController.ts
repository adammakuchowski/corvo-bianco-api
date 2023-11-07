import {NextFunction, Request, Response} from 'express'

import {logger} from '../../app'
import {Product} from '../../interfaces/commonTypes'
import {createNewProduct, findAllProducts} from '../services/productsService'
import ProductModel from '../../db/models/productModel'
import {canCreateDocument} from '../../db/mongoUtils'
import appConfig from '../../configs/appConfig'

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const resault = await findAllProducts()

    res
      .status(200)
      .json(resault)
  } catch (error: any) {
    logger.error(`[getAllProducts]: ${error.message}`)

    next(error)
  }
}

export const createProduct = async (
  req: Request<{}, {}, Product>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const product = req.body
  const {database: {productLimit}} = appConfig

  try {
    const canCreate = await canCreateDocument(ProductModel, productLimit)
    if (!canCreate) {
      throw new Error('Limit of products documents reached.')
    }

    const savedProduct = await createNewProduct(product)
    res
      .status(201)
      .json(savedProduct)
    logger.info('[createProduct]: Product saved')
  } catch (error: any) {
    logger.error(`[createProduct]: ${error.message}`)

    next(error)
  }
}

export const testProductsRoute = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const {method, originalUrl} = req

  try {
    res
      .status(200)
      .json({
        method,
        originalUrl,
        message: 'Request successfully processed'
      })
  } catch (error: any) {
    logger.error(`[testProductsRoute]: ${error.message}`)

    next(error)
  }
}
