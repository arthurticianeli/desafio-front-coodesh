import React, { Fragment, useEffect } from 'react';

import { Link } from 'react-router-dom';

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
  const { getUsers, users, filteredUsers } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const data = React.useMemo(
    () => (!!filteredUsers.length ? filteredUsers : users),
    [filteredUsers, users]
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
      { Header: 'Action' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, i) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <Fragment key={i}>
                  {i < 2 && (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <chakra.span pl="4">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TriangleDownIcon />
                          ) : (
                            <TriangleUpIcon />
                          )
                        ) : (
                          <UpDownIcon />
                        )}
                      </chakra.span>
                    </Th>
                  )}
                </Fragment>
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
                  <Fragment key={i}>
                    {i < 3 ? (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')} </Td>
                    ) : (
                      <Td>
                        <Link to={`/profile/${row.id}`}>
                          <Button size={'sm'}>Visualizar</Button>
                        </Link>
                      </Td>
                    )}
                  </Fragment>
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
        <SpinnerIcon /> <Text ml="5px">Load more</Text>
      </Button>
    </>
  );
}

export default TableDisplay;
