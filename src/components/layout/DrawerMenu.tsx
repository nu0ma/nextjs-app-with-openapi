import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Navigation } from '@/components/layout/Navigation';

export const DrawerMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg={useColorModeValue('white', 'gray.800')}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};
