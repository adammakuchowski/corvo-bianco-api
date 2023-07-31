import express from 'express'
import errorHandler from './middlewares/errorHandler'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'
import {connectDB} from './db/db'

const app = express()
connectDB()

app.use('/', defaultServerRouter)

app.use('/products', productsRouter)


app.use(errorHandler)

export default app
