import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import { Post } from 'src/api/@types';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';

type Props = {
  posts: Post[];
};

export const PostTable = (props: Props) => {
  return (
    <Box border="1px" overflowX="auto">
      <Table role="table">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.author}</Td>
              <Td>
                <EditPost postId={post.id} />
              </Td>
              <Td>
                <DeletePost postId={post.id} postName={post.title} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
