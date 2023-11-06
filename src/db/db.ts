import mongoose, {ConnectOptions} from 'mongoose'

import {logger} from '../../app'
import appConfig from '../configs/appConfig'

const {database: {host, port, name, mongoUrl}} = appConfig 
const DB_URL = mongoUrl || `mongodb://${host}:${port}/${name}`

const connectDB = async (): Promise<void> => {
  const dbOptions: ConnectOptions = {}
  try {
    await mongoose.connect(DB_URL)
    logger.info('Connected to MongoDB')
  } catch (error: any) {
    logger.error(`Error connecting to MongoDB: ${error.message}`)
  }
}

export default connectDB
