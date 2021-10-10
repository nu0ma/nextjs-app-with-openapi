import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import PostPage from '@/pages/index';
import { SWRConfig } from 'swr';
import components from '@/mocks/components';

describe('Post Page', () => {
  beforeEach(async () => {
    render(
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <PostPage />
      </SWRConfig>
    );
  });

  test('Loading', async () => {
    expect(await screen.findByText(/Loading/)).toBeInTheDocument();
  });

  test('apiからのデータが表示される', async () => {
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/));
    expect(screen.getByRole('table')).toHaveTextContent(
      components.Posts[0].title
    );
  });
});
