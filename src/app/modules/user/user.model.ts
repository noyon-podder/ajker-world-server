import { model, Schema } from 'mongoose'
import { TProfile, TUser } from './user.type'
import AppError from '../../error/AppError'

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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

// Query Middleware
userSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

userSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } })

  next()
})
// is not exist user throw error
userSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()

  const isUserExist = await User.findOne(query)

  if (!isUserExist) {
    throw new AppError(404, 'User not found!!')
  }

  next()
})

// Add a post hook to remove 'isDeleted' field
userSchema.set('toJSON', {
  transform: function (doc: TUser, ret: any) {
    delete ret.isDeleted
    return ret
  },
})
export const User = model<TUser>('User', userSchema)
