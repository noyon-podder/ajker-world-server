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

export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDB,
}
