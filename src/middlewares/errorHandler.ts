import {NextFunction, Request, Response} from 'express'

import {logger} from '../app'
import {ErrorResponse} from '../interfaces/errorResponse'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  const {method, originalUrl} = req

  const responseBody = {
    method,
    originalUrl,
    message: err.message,
    stack: err.stack,
  }

  logger.error(responseBody)
  
  res
    .status(500)
    .json(responseBody)
}

export default errorHandler
