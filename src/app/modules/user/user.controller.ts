import { UserServices } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully!',
    data: result,
  })
})

export const UserControllers = {
  createUser,
}
