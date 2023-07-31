import {Request, Response} from 'express'
import ProductModel from '../../db/models/productModel'
import {Product} from '../../interfaces/RequestTypes'
import Joi from 'joi'

const products = [1, 2, 3]

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body

  try {
    // const newProduct = new ProductModel(product)
    // const savedProduct = await newProduct.save()

    // res.json(savedProduct)

    res.json(req.body)
  } catch (error: any) {
    console.error('Error when creating a new product:', error.message);
  }

}

export const getAllProducts = (req: Request, res: Response): void => {
  res.json(products)
}
