import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
  Text,
  Link,
  Box,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

export const Settings: React.FC = () => {
  return (
    <Menu placement="bottom">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SettingsIcon />}
        variant="outline"
        _active={{ bg: '#aca995' }}
        color={useColorModeValue('gray.800', 'gray.300')}
      />
      <MenuList mr={4}>
        <MenuItem>
          <Box>
            <Text fontWeight="bold">User Name</Text>
          </Box>
        </MenuItem>
        <Divider mb={2} />

        <MenuItem>
          <Box>
            {/* <Icon mr={2} as={}></Icon> */}
            <Link href="/my_page">My Page</Link>
          </Box>
        </MenuItem>

        <MenuItem>
          <Link>Logout</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
