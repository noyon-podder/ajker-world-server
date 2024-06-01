import express from 'express'
import { PostControllers } from './post.controller'

const router = express.Router()

router.post(
  '/create-post',
  //   validator(UserValidation.createUserValidationSchema),
  PostControllers.createPost,
)

// router.get('/', UserControllers.getAllUser)

// router.get('/:userId', UserControllers.getSingleUser)

// router.patch(
//   '/:userId',
//   validator(UserValidation.updateUserValidationSchema),
//   UserControllers.singleUserUpdate,
// )

// router.delete('/:userId', UserControllers.userDeleted)

export const PostRoutes = router

/** // TODO: next day it is implement
 * To populate when user the check which author is post this
 * post soft delete, get, get:id, and update
 * per post view count increment when hit single post route it increment++
 * create a unique slug and search the single post using this slug
 */
