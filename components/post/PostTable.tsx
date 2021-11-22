import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { Post } from '../../api/@types';
import { EditPost } from './EditPost';

type Props = {
  posts: Post[];
};

export const PostTable = (props: Props) => {
  return (
    <>
      <Table variant="simple" minW="1000px">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Author</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.author}</Td>
              <Td>
                <EditPost post={post} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
