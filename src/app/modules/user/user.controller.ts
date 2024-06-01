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

// all user get from here
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserIntoDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully!',
    data: result,
  })
})

// single user get from here
const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUserIntoDB(req.params.userId)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully!',
    data: result,
  })
})

// single user update from here
const singleUserUpdate = catchAsync(async (req, res) => {
  const updatedData = req.body
  const { userId } = req.params
  const result = await UserServices.singleUserUpdateIntoDB(userId, updatedData)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Update Successfully!',
    data: result,
  })
})

// user soft delete
const userDeleted = catchAsync(async (req, res) => {
  const result = await UserServices.userDeleteIntoDB(req.params.userId)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Delete Successfully!',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  singleUserUpdate,
  userDeleted,
}
