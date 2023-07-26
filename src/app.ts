import express, {Request, Response } from 'express'
import productsRouter from './routes/products'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.use('/products', productsRouter)

export default app
