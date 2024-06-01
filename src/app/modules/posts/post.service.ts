import { Post } from './post.model'
import { TPosts } from './post.types'

// new user create in db
const createPostIntoDB = async (payload: TPosts) => {
  const result = await Post.create(payload)

  return result
}

export const PostServices = {
  createPostIntoDB,
}
