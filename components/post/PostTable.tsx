import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Post } from '../../api/@types';

type Props = {
  posts: Post[];
};

export const PostTable = (props: Props) => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Author</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.posts.map((post) => (
            <Tr>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.author}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
