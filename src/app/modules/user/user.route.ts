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

router.get('/', UserControllers.getAllUser)

router.get('/:userId', UserControllers.getSingleUser)

router.patch('/:userId', UserControllers.singleUserUpdate)

export const UserRoutes = router
