import React, { useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';

import {
  SpinnerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UpDownIcon,
} from '@chakra-ui/icons';

import { useTable, useSortBy } from 'react-table';
import { useGetUsers } from '../providers/GetUsers';

function TableDisplay() {
  const { getUsers, users } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const data = React.useMemo(() => users, [users]);

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
      { Header: 'Action' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const handleClick = id => {
    console.log(rows[id].original);
  };

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, i) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <>
                  {i < 2 && (
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
                  )}
                </>
              ))}
              <>
                <Th>Birth</Th>
                <Th>Actions</Th>
              </>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => (
                  <>
                    {i < 3 ? (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')} </Td>
                    ) : (
                      <Td>
                        <Button onClick={() => handleClick(row.id)} size={'sm'}>
                          Visualizar
                        </Button>
                      </Td>
                    )}
                  </>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Button
        variant="ghost"
        _hover={{ backgroundColor: 'gray.200' }}
        onClick={getUsers}
      >
        <SpinnerIcon /> <Text ml="5px">Loading more...</Text>
      </Button>
    </>
  );
}

export default TableDisplay;
