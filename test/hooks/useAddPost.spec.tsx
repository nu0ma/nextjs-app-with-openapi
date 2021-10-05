import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { ReactNode } from 'react';

import { useAddPost } from '@/hooks/useAddPost';

jest.mock('swr');

describe('useAddPost', () => {
  it('should be defined', () => {
    expect(useAddPost).toBeDefined();
  });

  let hook: RenderHookResult<
    { children: ReactNode },
    ReturnType<typeof useAddPost>
  >;

  beforeEach(() => {
    hook = renderHook(() => useAddPost());
  });

  test('Add Post', async () => {
    const postData = {
      id: 99,
      title: 'test title',
      author: 'test author',
    };

    const result = await hook.result.current.addPost(
      postData.id.toString(),
      postData.title,
      postData.author
    );
    expect(result).toEqual(postData);
  });
});
