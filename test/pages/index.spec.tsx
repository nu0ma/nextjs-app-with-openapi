import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import PostPage from '@/pages/index';
import components from '@/mocks/components';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

jest.mock('next/router', () => ({
  useRouter: () => ({
    router: jest.mock,
  }),
}));

describe('Post Page', () => {
  beforeEach(async () => {
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
    render(<PostPage />, { wrapper });
  });

  test('apiからのデータが表示される', async () => {
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/));
    expect(screen.getByRole('table')).toHaveTextContent(
      components.Posts[0].title
    );
  });
});
