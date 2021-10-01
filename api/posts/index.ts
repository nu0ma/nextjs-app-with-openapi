/* eslint-disable */
export type Methods = {
  /** 記事取得 */
  get: {
    query: {
      id?: string;
      title?: string;
      author?: string;
    };

    status: 200;
    /** User Found */
    resBody: {
      id: number;
      title: string;
      author: string;
    }[];
  };

  /** 記事追加 */
  post: {
    status: 200;

    /** OK */
    resBody: {
      id: number;
      title: string;
      author: string;
    };

    reqBody: {
      id: number;
      title: string;
      author: string;
    };
  };
};
