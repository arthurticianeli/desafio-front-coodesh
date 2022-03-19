import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTableUsers } from '../../providers/TableUsers';

function InputSearch() {
  const { users, filterUser } = useTableUsers();

  const [value, setValue] = useState('');

  useEffect(() => {
    filterUser(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, users]);

  return (
    <InputGroup>
      <Input placeholder="Searching" onChange={e => setValue(e.target.value)} />
      <InputRightElement children={<SearchIcon />} />
    </InputGroup>
  );
}

export default InputSearch;
