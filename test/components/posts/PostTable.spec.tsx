import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { PostTable } from '@/components/posts/PostTable';
import components from '@/mocks/components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

describe('Post Table', () => {
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

    render(<PostTable posts={components.Posts} />, { wrapper });
  });

  test('propsで与えたPostsが正常に表示される', async () => {
    const id = screen.getByText(components.Posts[0].id);
    const title = screen.getByText(components.Posts[0].title);
    const author = screen.getByText(components.Posts[0].author);
    expect(id).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  test('記事の編集ができる', async () => {
    const newTitle = 'updated title';
    const newAuthor = 'updated author';

    const editButton = screen.getAllByTestId('edit');
    fireEvent.click(editButton[0]);
    const input2 = screen.getByLabelText('Title');
    const input3 = screen.getByLabelText('Author');

    fireEvent.change(input2, { target: { value: newTitle } });
    fireEvent.change(input3, { target: { value: newAuthor } });

    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });

    expect(await screen.findByText(/updated title/)).toBeInTheDocument();
  });

  test('記事の削除ができる', async () => {
    const deleteButton = screen.getAllByTestId('delete');
    fireEvent.click(deleteButton[0]);
    fireEvent.click(screen.getByText('決定'));

    await waitFor(() => {
      expect(screen.getByText('Deleted.')).toBeInTheDocument();
    });
  });
});
