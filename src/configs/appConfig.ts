import {config as dotenv} from 'dotenv'

dotenv()
interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
  productLimit: number;
  orderLimit: number;
}

interface AppConfig {
  port: number;
  database: DatabaseConfig;
}

const appConfig: AppConfig = {
  port: Number(process.env.PORT) || 3000,
  database: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 27017,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    name: process.env.DB_NAME || 'my_database',
    productLimit: Number(process.env.DB_PRODUCT_LIMIT) || 20,
    orderLimit: Number(process.env.DB_ORDER_LIMIT) || 50,
  }
}

export default appConfig
