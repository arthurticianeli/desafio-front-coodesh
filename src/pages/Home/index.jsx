import { Box, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import Skeleton from '../../components/Skeleton';
import TableDisplay from '../../components/Table';
import { useGetUsers } from '../../providers/GetUsers';
import { styleBox, styleStack } from './styles';

function Home() {
  const { loading, getUsers } = useGetUsers();

  useEffect(() => {
    getUsers();
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
