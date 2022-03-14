import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import {
  SearchIcon,
  SpinnerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';

function App() {
  const data = React.useMemo(
    () => [
      {
        name: 'Carlos',
        gender: 'Masculino',
        birth: '25/12/2002',
      },
      {
        name: 'Ana',
        gender: 'Feminino',
        birth: '23/11/2002',
      },
      {
        name: 'Zulu',
        gender: 'Masculino',
        birth: '02/02/2002',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Birth',
        accessor: 'birth',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <ChakraProvider theme={theme}>
      <Box minH={'100vh'}>
        <Flex
          justifyContent={'space-between'}
          alignItems="center"
          w="90vw"
          p="5px"
          mx={'auto'}
          mb={10}
        >
          <Flex>
            <Img src="undefined" />
            Company
          </Flex>
          <Img src="undefined" borderRadius={'full'} />
        </Flex>
        <VStack spacing={5} w="70vw" m={'auto'}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <InputGroup>
            <Input placeholder="Searching" />
            <InputRightElement children={<SearchIcon />} />
          </InputGroup>

          <Table {...getTableProps()}>
            <Thead>
              {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <chakra.span pl="4">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : (
                          <UpDownIcon aria-label="sorted ascending" />
                        )}
                      </chakra.span>
                    </Th>
                  ))}
                  <Th>Actions</Th>
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')} </Td>
                    ))}
                    <Td>
                      <Button size={'sm'}>Visualizar</Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          <Flex alignItems={'center'} cursor="pointer">
            <SpinnerIcon /> <Text ml="5px">Loading more...</Text>
          </Flex>
        </VStack>
        <Flex alignItems={'center'} pos="fixed" top={'95%'}>
          <ColorModeSwitcher /> <Text>Color Theme</Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
