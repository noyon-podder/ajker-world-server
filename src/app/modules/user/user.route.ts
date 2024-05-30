import express from 'express'
import { UserControllers } from './user.controller'
import validator from '../../middlewares/validator'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validator(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
)

export const UserRoutes = router
