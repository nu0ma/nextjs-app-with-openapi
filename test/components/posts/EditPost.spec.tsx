import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { EditPost } from '@/components/posts/EditPost';
import components from '@/mocks/components';

const mockedEditPost = jest.fn((title, author) => components.Post);

jest.mock('@/hooks/useEditPost', () => ({
  useEditPost: () => ({ editPost: mockedEditPost }),
}));

describe('Edit Post', () => {
  beforeEach(() => {
    render(<EditPost postId={components.Post.id} />);
  });

  test('タイトルやIDを何も入力していない時は記事を編集できない', async () => {
    fireEvent.click(screen.getByTestId('edit'));
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(mockedEditPost).not.toHaveBeenCalled();
  });

  test('タイトルだけが入力されていても記事を編集できない', async () => {
    fireEvent.click(screen.getByTestId('edit'));
    const input = screen.getByLabelText('Author');

    fireEvent.change(input, { target: { value: 'test title' } });
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockedEditPost).not.toHaveBeenCalled();
  });

  test('著者だけが入力されていても記事を編集できない', async () => {
    fireEvent.click(screen.getByTestId('edit'));
    const input = screen.getByLabelText('Author');
    fireEvent.change(input, { target: { value: 'test user' } });
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockedEditPost).not.toHaveBeenCalled();
  });

  test('全ての項目が入力されていると記事を編集できる', async () => {
    fireEvent.click(screen.getByTestId('edit'));
    const input2 = screen.getByLabelText('Title');
    const input3 = screen.getByLabelText('Author');

    fireEvent.change(input2, { target: { value: components.Post.title } });
    fireEvent.change(input3, { target: { value: components.Post.author } });

    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });

    // expect(await screen.findAllByRole('alert')).toHaveLength(0);
    // await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(mockedEditPost).toBeCalledWith(
      components.Post.title,
      components.Post.author
    );

    expect(mockedEditPost).toHaveBeenCalled();
  });
});
