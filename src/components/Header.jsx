import { Flex, Img, Text } from '@chakra-ui/react';

import Logo from '../assets/logo/logo.svg';
import avatar from '../assets/avatar.png';

function Header() {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems="center"
      w="90vw"
      p="5px"
      mx={'auto'}
      mb={10}
      mt={5}
    >
      <Flex alignItems="center">
        <Img w="30px" h="30px" alt="Logo" src={Logo} mr="10px" />
        <Text fontWeight={'900'}>Pharma Inc</Text>
      </Flex>
      <Img
        src={avatar}
        borderRadius={'full'}
        h="30px"
        w="30px"
        backgroundColor="gray.300"
      />
    </Flex>
  );
}

export default Header;
