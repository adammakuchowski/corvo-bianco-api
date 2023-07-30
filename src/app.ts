import express from 'express'
import errorHandler from './middlewares/errorHandler'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'

const app = express()

app.use('/', defaultServerRouter)

app.use('/products', productsRouter)


app.use(errorHandler)

export default app
