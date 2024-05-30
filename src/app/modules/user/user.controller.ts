import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createUserIntoDB(req.body)

    res.status(200).json({
      success: true,
      message: 'User create successfully!!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserControllers = {
  createUser,
}
