import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import winston from 'winston'

import corsOptions from './configs/corsConfig'
import loggerConfig from './configs/winstonConfig'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'
import ordersRouter from './api/routes/ordersRouter'
import notFound from './validators/notFoundHandler'
import errorHandler from './middlewares/errorHandler'
import {connectDB} from './db/db'

export const logger = winston.createLogger(loggerConfig)

connectDB()
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(cors(corsOptions))

app.use('/', defaultServerRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

app.use(notFound)
app.use(errorHandler)

export default app
