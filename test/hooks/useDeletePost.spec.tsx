import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import { useDeletePost } from '@/hooks/useDeletePost';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

describe('useDeletePost', () => {
  it('should be defined', () => {
    expect(useDeletePost).toBeDefined();
  });

  let hook: RenderHookResult<number, ReturnType<typeof useDeletePost>>;

  beforeEach(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
        },
      },
    });

    const wrapper = ({ children }: Number & { children?: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    hook = renderHook((props) => useDeletePost(props), {
      initialProps: 99,
      wrapper,
    });
  });

  test('Delete Post', async () => {
    await act(async () => {
      const result = await hook.result.current.deletePost();
      expect(result).not.toEqual(undefined);
    });
  });
});
