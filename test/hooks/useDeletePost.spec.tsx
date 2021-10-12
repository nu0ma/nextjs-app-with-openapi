import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useDeletePost } from '@/hooks/useDeletePost';

jest.mock('swr');

describe('useDeletePost', () => {
  it('should be defined', () => {
    expect(useDeletePost).toBeDefined();
  });

  let hook: RenderHookResult<number, ReturnType<typeof useDeletePost>>;

  beforeEach(() => {
    hook = renderHook((props) => useDeletePost(props), { initialProps: 99 });
  });

  test('Delete Post', async () => {
    await act(async () => {
      const result = await hook.result.current.deletePost();
      expect(result).not.toEqual(undefined);
    });
  });
});
