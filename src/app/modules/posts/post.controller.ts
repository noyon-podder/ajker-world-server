import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { PostServices } from './post.service'

// req.body data pass services and create user
const createPost = catchAsync(async (req, res) => {
  const result = await PostServices.createPostIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Post Create Successfully!',
    data: result,
  })
})

export const PostControllers = {
  createPost,
}
