import {Request, Response} from 'express'

export default ((req: Request, res: Response) => {
  res.send('Every day you must ask yourself: Did you do enough?')
})
