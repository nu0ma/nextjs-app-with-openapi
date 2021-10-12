import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { AddPost } from '@/components/posts/AddPost';
import components from '@/mocks/components';

const mockedAddPost = jest.fn((id, title, author) => components.Post);

jest.mock('@/hooks/useAddPost', () => ({
  useAddPost: () => ({ addPost: mockedAddPost }),
}));

describe('Add Post', () => {
  beforeEach(() => {
    render(<AddPost />);
  });

  test('タイトルやIDを何も入力していない時は記事を追加できない', async () => {
    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(mockedAddPost).not.toHaveBeenCalled();
  });

  test('IDだけが入力されていても記事を追加できない', async () => {
    fireEvent.click(screen.getByText('Add'));
    const input = screen.getByLabelText('ID');
    fireEvent.change(input, { target: { value: '123' } });
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockedAddPost).not.toHaveBeenCalled();
  });

  test('タイトルだけが入力されていても記事を追加できない', async () => {
    fireEvent.click(screen.getByText('Add'));
    const input = screen.getByLabelText('Author');

    fireEvent.change(input, { target: { value: 'test title' } });
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockedAddPost).not.toHaveBeenCalled();
  });

  test('著者だけが入力されていても記事を追加できない', async () => {
    fireEvent.click(screen.getByText('Add'));
    const input = screen.getByLabelText('Author');
    fireEvent.change(input, { target: { value: 'test user' } });
    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockedAddPost).not.toHaveBeenCalled();
  });

  test('全ての項目が入力されていると記事を追加できる', async () => {
    fireEvent.click(screen.getByText('Add'));
    const input1 = screen.getByLabelText('ID');
    const input2 = screen.getByLabelText('Title');
    const input3 = screen.getByLabelText('Author');

    fireEvent.change(input1, { target: { value: components.Post.id } });
    fireEvent.change(input2, { target: { value: components.Post.title } });
    fireEvent.change(input3, { target: { value: components.Post.author } });

    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });

    // expect(await screen.findAllByRole('alert')).toHaveLength(0);
    // await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(mockedAddPost).toBeCalledWith(
      components.Post.id.toString(),
      components.Post.title,
      components.Post.author
    );

    expect(mockedAddPost).toHaveBeenCalled();
  });
});
