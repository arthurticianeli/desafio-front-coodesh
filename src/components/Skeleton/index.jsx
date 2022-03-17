import { Stack, Skeleton as Div } from '@chakra-ui/react';
import React from 'react';

function Skeleton({ modal }) {
  return modal ? (
    <Stack width="full" spacing={'20px'} alignItems="center" my="40px">
      <Div w="100px" h="100px" borderRadius={'full'} />
      <Div w="300px" h="20px" />
      <Div w="300px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
      <Div w="400px" h="20px" />
    </Stack>
  ) : (
    <Stack width="full" spacing={'20px'}>
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
      <Div height="45" />
    </Stack>
  );
}

export default Skeleton;
