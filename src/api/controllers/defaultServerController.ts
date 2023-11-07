import {Request, Response} from 'express'

export default ((req: Request, res: Response): void => {
  res
    .status(200)
    .send('Every day you must ask yourself: Did you do enough?')
})
