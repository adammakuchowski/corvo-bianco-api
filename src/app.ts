import express, {Request, Response } from 'express'
import config from './config'

const app = express()
const {port} = config 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`API is listening on port: ${port}`)
})
