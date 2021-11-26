import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box px={4}>
      {/* ヘッダー */}
      <Header />

      <Flex>
        {/* サイドバー */}

        <Box w="200px">
          <Sidebar />
        </Box>

        {/* コンテンツ */}
        <Box as="main" width="full">
          <Box p={2}>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
};