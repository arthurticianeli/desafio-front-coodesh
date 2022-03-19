import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { Box, Button, Center, Text } from '@chakra-ui/react';

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';

import {
  SpinnerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UpDownIcon,
} from '@chakra-ui/icons';

import { useTable, useSortBy } from 'react-table';

import {
  boxStyle,
  buttonStyle,
  textStyle,
  wrapperBody,
  wrapperHead,
} from './styles';
import { useTableUsers } from '../../providers/TableUsers';

function TableDisplay() {
  const { getTableUsers, filteredUsers, maxLoaded } = useTableUsers();

  const data = React.useMemo(() => filteredUsers, [filteredUsers]);

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
    <Box sx={boxStyle}>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, i) => (
            <Tr {...headerGroup.getHeaderGroupProps()} sx={wrapperHead}>
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

              <Th>Birth</Th>
              <Th>Actions</Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} sx={wrapperBody}>
                {row.cells.map((cell, i) => (
                  <Fragment key={i}>
                    {i < 3 ? (
                      <Td {...cell.getCellProps()}>{cell.render('Cell')} </Td>
                    ) : (
                      <Td>
                        <Link
                          to={`/profile/${row.original.page}/${row.original.id.value}`}
                        >
                          <Button size={'sm'}>View</Button>
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
      <Center>
        {maxLoaded ? (
          <Button disabled sx={buttonStyle} variant="ghost">
            <Text sx={textStyle}>No more user</Text>
          </Button>
        ) : (
          <Button sx={buttonStyle} variant="ghost" onClick={getTableUsers}>
            <SpinnerIcon /> <Text sx={textStyle}>Load more</Text>
          </Button>
        )}
      </Center>
    </Box>
  );
}

export default TableDisplay;
