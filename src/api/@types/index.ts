/* eslint-disable */
export type Post = {
  id: number
  title: string
  author: string
}

export type Comment = {
  id: number
  body: string
  postId: number
}
