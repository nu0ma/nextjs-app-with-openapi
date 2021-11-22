import { ComponentProps } from 'react';
import { PostTable } from './PostTable';

type Props = ComponentProps<typeof PostTable>;

export const Posts = (props: Props) => {
  return (
    <>
      <PostTable posts={props.posts} />
    </>
  );
};
