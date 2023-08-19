import {NextFunction, Request, Response} from 'express'
import {logger} from '../app'
import {ErrorResponse} from '../interfaces/errorResponse'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  res.status(500)

  const responseBody = {
    message: err.message,
    stack: err.stack,
  }

  logger.error(responseBody)
  res.json(responseBody)
}

export default errorHandler
