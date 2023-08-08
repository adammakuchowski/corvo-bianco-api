import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorHandler from './middlewares/errorHandler'
import {connectDB} from './db/db'
import corsOptions from './corsConfig'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'
import ordersRouter from './api/routes/ordersRouter'

const app = express()
connectDB()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsOptions))
// TODO: init helmet 

app.use('/', defaultServerRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

// TODO: not found handler
app.use(errorHandler)

export default app
