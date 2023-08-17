import express, {Application} from 'express'
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

export const logger = winston.createLogger(loggerConfig)

const setupMiddlewares = (app: Application) => {
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(express.json())
  app.use(cors(corsOptions))
}

const setupErrorHandling = (app: Application) => {
  app.use(notFound)
  app.use(errorHandler)
}

const createApp = () => {
  const app = express()

  setupMiddlewares(app)

  app.use('/', defaultServerRouter)
  app.use('/products', productsRouter)
  app.use('/orders', ordersRouter)

  setupErrorHandling(app)

  return app
}

export default createApp
