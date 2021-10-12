import { ReactNode } from 'react';

import { Header } from '@/components/layout/Header';
import { Box, CSSReset, Flex, useColorModeValue } from '@chakra-ui/react';
import { Navigation } from '@/components/layout/Navigation';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.800', 'white')}
    >
      <CSSReset />

      <Header />

      <Flex alignItems="start">
        {/* for desktop */}
        <Box
          display={{ base: 'none', md: 'block' }}
          w={250}
          px={6}
          pt={4}
          height="95vh"
        >
          <Navigation />
        </Box>
        <Box width="full" px={4} pt={2}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};
