import { Types } from 'mongoose'

export type TPosts = {
  title: string
  content: string
  category: string
  author: Types.ObjectId
  postImage: string
  tags: [string]
  viewCount: number
}
