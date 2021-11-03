import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useAddPost } from '@/hooks/useAddPost';

describe('useAddPost', () => {
  it('should be defined', () => {
    expect(useAddPost).toBeDefined();
  });

  let hook: RenderHookResult<
    { children: ReactNode },
    ReturnType<typeof useAddPost>
  >;

  beforeEach(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
        },
      },
    });

    const wrapper = ({ children }: { children?: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    hook = renderHook(() => useAddPost(), { wrapper });
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
