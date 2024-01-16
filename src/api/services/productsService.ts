import {Document} from 'mongoose'

import ProductModel from '../../db/models/productModel'
import {Product} from '../../interfaces/commonTypes'

export const createNewProduct = async (product: Product): Promise<Document> => {
  const newProduct = new ProductModel(product)
  const savedProduct = await newProduct.save()

  return savedProduct
}

export const findAllProducts = async (): Promise<Product[]> => {
  const resault = await ProductModel.find({}).lean()

  return resault
}
