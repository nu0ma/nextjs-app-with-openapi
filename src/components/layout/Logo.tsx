import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';

export const Logo: React.FC = () => {
  return (
    <HStack pl={2} alignItems="center">
      <Image src="vercel.svg" boxSize="80px" borderRadius="full" />
    </HStack>
  );
};
