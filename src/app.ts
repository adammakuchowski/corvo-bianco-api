import express, {Application} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import errorHandler from './middlewares/errorHandler'
import corsOptions from './corsConfig'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'
import ordersRouter from './api/routes/ordersRouter'
import notFound from './validators/notFoundHandler'

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
