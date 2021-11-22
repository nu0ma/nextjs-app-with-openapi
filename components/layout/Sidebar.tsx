import { Link as ChakraLink, Stack } from '@chakra-ui/layout';

import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children: string;
};

const HoverLink = (props: Props) => {
  const router = useRouter();

  return (
    <Link href={props.href}>
      <ChakraLink
        _hover={{ bg: 'gray.200' }}
        p={2}
        fontWeight="bold"
        borderRadius="base"
        bg={router.pathname === props.href ? 'gray.300' : ''}
      >
        {props.children}
      </ChakraLink>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/">Post</HoverLink>
      <HoverLink href="/user">User</HoverLink>
    </Stack>
  );
};
