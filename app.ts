import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import winston from 'winston'

import corsOptions from './src/configs/corsConfig'
import loggerConfig from './src/configs/winstonConfig'
import appConfig from './src/configs/appConfig'
import defaultServerRouter from './src/api/routes/defaultServerRouter'
import productsRouter from './src/api/routes/productsRouter'
import ordersRouter from './src/api/routes/ordersRouter'
import notFound from './src/validators/notFoundHandler'
import errorHandler from './src/middlewares/errorHandler'
import connectDB from './src/db/db'

const {port} = appConfig
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

app.listen(port, () => {
  logger.info(`API is listening on port: ${port}`)
})
