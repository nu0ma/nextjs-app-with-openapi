import { rest } from 'msw';
import { Post } from '../api/@types';
import components from './components';

export const handlers = [
  // 記事一覧取得
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(components.Posts));
  }),

  // 記事一覧取得
  rest.get('/api/posts', (req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(components.Posts));
  }),

  // 記事追加
  rest.post<Post, Post>('/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 99,
        title: req.body.title,
        author: req.body.author,
      })
    );
  }),

  // 記事更新
  rest.patch<Pick<Post, 'title' | 'author'>, Post>(
    '/posts/:id',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: req.params.id,
          title: req.body.title || components.Post.title,
          author: req.body.author || components.Post.author,
        })
      );
    }
  ),

  // 記事削除
  rest.delete<Post, Post>('/posts/:id', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
