import { model, Schema } from 'mongoose'
import { TPosts } from './post.types'

const PostSchema = new Schema<TPosts>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },

    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    postImage: {
      type: String,
      required: [true, 'Image is required'],
    },
    tags: {
      type: [String],
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
)

export const Post = model<TPosts>('Post', PostSchema)
