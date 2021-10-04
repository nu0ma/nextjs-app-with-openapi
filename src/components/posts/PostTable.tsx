import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react';
import { Post } from 'src/api/@types';
import { EditPost } from './EditPost';

type Props = {
  posts: Post[];
};

export const PostTable = (props: Props) => {
  return (
    <Box border="1px">
      <Table minW="800px">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Edit</Th>
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
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
