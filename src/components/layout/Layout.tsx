import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minH="90vh"
    >
      <Box mt="8">{children}</Box>
    </Flex>
  );
};
