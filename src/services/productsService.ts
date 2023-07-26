import { Request, Response } from 'express'

const products = [1,2,3]

export const getAllProducts = (req: Request, res: Response): void => {
  res.json(products)
}
