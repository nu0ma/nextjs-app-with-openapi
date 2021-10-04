/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './comments'
// prettier-ignore
import { Methods as Methods1 } from './posts'
// prettier-ignore
import { Methods as Methods2 } from './posts/_id@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/comments'
  const PATH1 = '/posts'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    comments: {
      /**
       * コメント追加
       * @param option.body - Post the necessary fields for the API to create a new user.
       * @returns User Created
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * コメント追加
       * @param option.body - Post the necessary fields for the API to create a new user.
       * @returns User Created
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      /**
       * コメント取得
       * @returns OK
       */
      get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * コメント取得
       * @returns OK
       */
      $get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    posts: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option: { query: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option: { query: Methods2['get']['query'], config?: T }) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
            fetch<Methods2['patch']['resBody'], BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns OK
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods2['delete']['resBody'], BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 記事取得
       * @returns User Found
       */
      get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 記事取得
       * @returns User Found
       */
      $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * 記事追加
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * 記事追加
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
