import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useEditPost } from '@/hooks/useEditPost';

describe('useEditPost', () => {
  it('should be defined', () => {
    expect(useEditPost).toBeDefined();
  });

  let hook: RenderHookResult<number, ReturnType<typeof useEditPost>>;

  beforeEach(() => {
    hook = renderHook((props) => useEditPost(props), { initialProps: 99 });
  });

  test('Edit Post', async () => {
    const newPost = {
      id: '99',
      title: 'new title',
      author: 'new author',
    };

    await act(async () => {
      const result = await hook.result.current.editPost(
        newPost.title,
        newPost.author
      );
      expect(result).toEqual(newPost);
    });
  });
});
