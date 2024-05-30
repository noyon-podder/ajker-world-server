import { UserServices } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

// req.body data pass services and create user
const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully!',
    data: result,
  })
})
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserIntoDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully!',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getAllUser,
}
