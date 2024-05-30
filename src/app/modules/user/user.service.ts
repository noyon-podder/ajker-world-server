import { User } from './user.model'
import { TUser } from './user.type'

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)

  return result
}

export const UserServices = {
  createUserIntoDB,
}
