import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorHandler from './middlewares/errorHandler'
import defaultServerRouter from './api/routes/defaultServerRouter'
import productsRouter from './api/routes/productsRouter'
import {connectDB} from './db/db'
import corsOptions from './corsConfig'

const app = express()
connectDB()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsOptions))

app.use('/', defaultServerRouter)
app.use('/products', productsRouter)

app.use(errorHandler)

export default app
