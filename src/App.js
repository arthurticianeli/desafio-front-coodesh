import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Providers from './providers';

import Routers from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Providers>
          <Routers />
        </Providers>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
