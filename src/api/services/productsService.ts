import ProductModel from '../../db/models/productModel'
import {Product} from '../../interfaces/RequestTypes'

export const createNewProduct = async (product: Product) => {
  const newProduct = new ProductModel(product)

  return newProduct.save()
}

export const findAllProducts = async () => {
  const resault =  await ProductModel.find({}).lean()

  return resault
}

