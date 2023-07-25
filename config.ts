interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
}

interface AppConfig {
  port: number;
  database: DatabaseConfig;
}

const config: AppConfig = {
  port: process.env.PORT ? Number(process.env.PORT) : 1337,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.PORT) : 27017,
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    name: process.env.DB_NAME || 'my_database'
  }
}

export default config
