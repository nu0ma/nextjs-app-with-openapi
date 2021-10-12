import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
