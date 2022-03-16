import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useGetUsers } from '../providers/GetUsers';

function InputSearch() {
  const { filterUser } = useGetUsers();

  return (
    <InputGroup>
      <Input
        placeholder="Searching"
        onChange={e => filterUser(e.target.value)}
      />
      <InputRightElement children={<SearchIcon />} />
    </InputGroup>
  );
}

export default InputSearch;
