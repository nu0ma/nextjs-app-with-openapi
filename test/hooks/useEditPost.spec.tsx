import { ReactNode } from 'react';
import {
  renderHook,
  RenderHookResult,
  act,
} from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useEditPost } from '@/hooks/useEditPost';

describe('useEditPost', () => {
  it('should be defined', () => {
    expect(useEditPost).toBeDefined();
  });

  let hook: RenderHookResult<number, ReturnType<typeof useEditPost>>;

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
    hook = renderHook((props) => useEditPost(props), {
      initialProps: 99,
      wrapper,
    });
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
