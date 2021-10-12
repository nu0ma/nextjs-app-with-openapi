import { Box, HStack, Spacer, useColorModeValue } from '@chakra-ui/react';

import { DrawerMenu } from '@/components/layout/DrawerMenu';
import { Settings } from '@/components/layout/Settings';
import { Logo } from '@/components/layout/Logo';

export const Header = () => {
  return (
    <HStack bg={useColorModeValue('white', 'gray.800')} height="60px" px={1}>
      <Logo />
      <Spacer />
      <Box pr={{ base: '0px', md: '4' }}>
        <Settings />
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <DrawerMenu />
      </Box>
    </HStack>
  );
};
