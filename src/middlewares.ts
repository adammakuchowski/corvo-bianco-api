import { NextFunction, Request, Response } from "express"

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500)

  const responseBody = {
    message: err.message,
    stack: err.stack,
  }

  console.error("Error: ", responseBody)
  res.json(responseBody)
}
