import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
} from '@chakra-ui/react';

import { SettingsIcon } from '@chakra-ui/icons';

export const Setting = () => (
  <Menu>
    <MenuButton as={Button}>
      <SettingsIcon />
    </MenuButton>
    <MenuList>
      <MenuItem fontWeight="bold">User Page</MenuItem>
      <Divider></Divider>
      <MenuItem>My Page</MenuItem>
      <MenuItem>Log out</MenuItem>
    </MenuList>
  </Menu>
);
