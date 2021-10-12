/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /** 記事取得 */
  get: {
    query?: {
      id?: string;
      title?: string;
      author?: string;
    };

    status: 200;
    /** User Found */
    resBody: Types.Post[];
  };

  /** 記事追加 */
  post: {
    status: 200;
    /** OK */
    resBody: Types.Post;

    reqBody: {
      id: number;
      title: string;
      author: string;
    };
  };
};
