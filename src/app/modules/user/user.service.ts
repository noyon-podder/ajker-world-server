import AppError from '../../error/AppError'
import { User } from './user.model'
import { TUser } from './user.type'

// new user create in db
const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)

  return result
}

// get all user into db
const getAllUserIntoDB = async () => {
  const result = await User.find()

  return result
}

// get single user
const getSingleUserIntoDB = async (userId: string) => {
  const userExist = await User.findOne({ _id: userId })

  if (!userExist) {
    throw new AppError(404, 'User not found')
  }

  return userExist
}

// single user update
const singleUserUpdateIntoDB = async (
  userId: string,
  payload: Partial<TUser>,
) => {
  const { username, ...otherUpdatedData } = payload

  if (username) {
    throw new AppError(400, 'username cannot be updated!')
  }

  const result = await User.findOneAndUpdate(
    { _id: userId },
    otherUpdatedData,
    {
      new: true,
    },
  )

  return result
}

// soft delete user
const userDeleteIntoDB = async (userId: string) => {
  const result = await User.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true },
  )

  return result
}

export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  singleUserUpdateIntoDB,
  userDeleteIntoDB,
}
