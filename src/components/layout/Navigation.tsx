import { Link as ChakraLink, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = {
  href: string;
  children: string;
};

const HoverLink = (props: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={props.href} passHref>
      <ChakraLink
        rounded="base"
        _hover={{ bg: 'gray.300' }}
        p="2"
        fontWeight="bold"
        bg={router.pathname === props.href ? 'gray.200' : ''}
        {...props}
      ></ChakraLink>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/">Post</HoverLink>
      <HoverLink href="/user">User</HoverLink>
    </Stack>
  );
};
