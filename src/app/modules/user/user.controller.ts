import { UserServices } from './user.service'
import catchAsync from '../../utils/catchAsync'

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body)

  res.status(200).json({
    success: true,
    message: 'User create successfully!!',
    data: result,
  })
})

export const UserControllers = {
  createUser,
}
