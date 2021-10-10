import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { DeletePost } from '@/components/posts/DeletePost';
import components from '@/mocks/components';

const mockedDeletePost = jest.fn((title, author) => components.Post);

jest.mock('@/hooks/useDeletePost', () => ({
  useDeletePost: () => ({ deletePost: mockedDeletePost }),
}));

describe('Delete Post', () => {
  beforeEach(() => {
    render(
      <DeletePost
        postId={components.Post.id}
        postName={components.Post.title}
      />
    );
  });

  test('削除ボタンを押して削除メソッドが呼ばれる', async () => {
    fireEvent.click(screen.getByTestId('delete'));
    fireEvent.click(screen.getByText('決定'));

    await waitFor(() => {
      fireEvent.submit(screen.getByText('決定'));
    });

    expect(mockedDeletePost).toHaveBeenCalled();
  });
});
