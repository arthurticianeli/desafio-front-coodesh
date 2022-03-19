import { Box, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import Skeleton from '../../components/Skeleton';
import TableDisplay from '../../components/Table';
import { useTableUsers } from '../../providers/TableUsers';

import { styleBox, styleStack } from './styles';

function Home() {
  const { loading, getTableUsers } = useTableUsers();

  useEffect(() => {
    getTableUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={styleBox}>
      <Header />
      <VStack sx={styleStack}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <InputSearch />
        {loading ? <Skeleton /> : <TableDisplay />}
      </VStack>
    </Box>
  );
}

export default Home;
