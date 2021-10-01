/* eslint-disable */
export type Methods = {
  get: {
    query: {
      id: string
      title: string
      author: string
    }

    status: 200

    /** OK */
    resBody: {
      id: number
      title: string
      author: string
    }
  }

  patch: {
    status: 200

    /** OK */
    resBody: {
    }

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
