import { Link, Stack, useColorModeValue } from '@chakra-ui/react';

type LinkProps = {
  href: string;
  children: string;
};

const HoverLink = (props: LinkProps) => (
  <Link
    rounded="base"
    _hover={useColorModeValue({ bg: 'gray.300' }, { bg: 'gray.700' })}
    p="2"
    fontWeight="bold"
    {...props}
  ></Link>
);

export const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/">Post</HoverLink>
      <HoverLink href="/user">User</HoverLink>
    </Stack>
  );
};
