/* eslint-disable */
export type Methods = {
  /** コメント追加 */
  post: {
    status: 200

    /** User Created */
    resBody: {
      id: number
      body: string
      postId: number
    }

    /** Post the necessary fields for the API to create a new user. */
    reqBody: {
      id: number
      body: string
      postId: number
    }
  }

  /** コメント取得 */
  get: {
    query: {
      postId: string
    }

    status: 200
    /** OK */
    resBody: {
      id: number
      body: string
      postId: number
    }[]
  }
}
