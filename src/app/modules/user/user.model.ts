import { model, Schema } from 'mongoose'
import { TProfile, TUser } from './user.type'

const profileSchema = new Schema<TProfile>({
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
})

const userSchema = new Schema<TUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'author', 'reader'],
      default: 'reader',
    },
    profile: {
      type: profileSchema,
    },
  },
  { timestamps: true },
)

export const User = model<TUser>('User', userSchema)
