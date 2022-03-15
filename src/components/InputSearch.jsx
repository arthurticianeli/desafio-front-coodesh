import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function InputSearch() {
  return (
    <InputGroup>
      <Input placeholder="Searching" />
      <InputRightElement children={<SearchIcon />} />
    </InputGroup>
  );
}

export default InputSearch;
