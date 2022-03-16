import { Box, Text, VStack } from '@chakra-ui/react';

import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import TableDisplay from '../components/TableDisplay';

const styleStack = {
  spacing: 5,
  width: '70vw',
  margin: 'auto',
};

const styleBox = {
  minHeigth: '100vh',
};

function HomePage() {
  return (
    <Box sx={styleBox}>
      <Header />
      <VStack sx={styleStack}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <InputSearch />
        <TableDisplay />
      </VStack>
    </Box>
  );
}

export default HomePage;
