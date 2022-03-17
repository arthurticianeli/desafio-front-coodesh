import { Avatar, Center, Flex, Img, Text } from '@chakra-ui/react';

import Logo from '../../assets/logo/logo.svg';
import avatar from '../../assets/avatar.png';
import { flexStyle, imgStyle } from './styles';

function Header() {
  return (
    <Flex sx={flexStyle}>
      <Center>
        <Img sx={imgStyle} alt="Logo" src={Logo} />
        <Text>Pharma Inc</Text>
      </Center>
      <Avatar src={avatar} size="sm" />
    </Flex>
  );
}

export default Header;
