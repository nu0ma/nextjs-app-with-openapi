import { HStack, Spacer } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Setting } from './Setting';

export const Header = () => (
  <HStack>
    <Logo />
    <Spacer></Spacer>
    <Setting />
  </HStack>
);
