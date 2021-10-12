import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { act } from 'react-test-renderer';

import { usePost } from '@/hooks/usePost';
import components from '@/mocks/components';

describe('useDistributor', () => {
  it('should be defined', () => {
    expect(usePost).toBeDefined();
  });

  let hook: RenderHookResult<
    { children: ReactNode },
    ReturnType<typeof usePost>
  >;

  beforeEach(() => {
    hook = renderHook(() => usePost());
  });

  test('記事を取得できる', async () => {
    await act(async () => {
      expect(hook.result.current.posts).toEqual(undefined);
      await hook.waitFor(() => hook.result.current.posts !== undefined);
      expect(hook.result.current.posts).toEqual(components.Posts);
    });
  });
});
