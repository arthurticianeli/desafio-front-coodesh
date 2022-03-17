import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetUsers } from '../../providers/GetUsers';

function InputSearch() {
  const { users, filterUser } = useGetUsers();

  const [value, setValue] = useState('');

  useEffect(() => {
    filterUser(value);
  }, [value, users]);

  return (
    <InputGroup>
      <Input placeholder="Searching" onChange={e => setValue(e.target.value)} />
      <InputRightElement children={<SearchIcon />} />
    </InputGroup>
  );
}

export default InputSearch;
