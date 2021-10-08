/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query: {
      id: string
      title: string
      author: string
    }

    status: 200
    /** OK */
    resBody: Types.Post
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.Post

    reqBody: {
      title: string
      author: string
    }
  }

  delete: {
    status: 200

    /** OK */
    resBody: {
    }
  }
}
