import React from 'react';
import { Box, ChakraProvider, Text, theme, VStack } from '@chakra-ui/react';

import Header from './components/Header';
import InputSearch from './components/InputSearch';
import TableDisplay from './components/TableDisplay';
import Providers from './providers';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Providers>
        <Box minH={'100vh'}>
          <Header />
          <VStack spacing={5} w="70vw" m={'auto'}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <InputSearch />
            <TableDisplay />
          </VStack>
        </Box>
      </Providers>
    </ChakraProvider>
  );
}

export default App;
