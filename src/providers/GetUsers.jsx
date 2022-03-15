import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const GetUsers = createContext({});

const useGetUsers = () => {
  const context = useContext(GetUsers);

  return context;
};

const GetUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async data => {
    await api.get('?results=50', data).then(response => {
      const usersTreated = response.data.results.map(user => {
        return {
          ...user,
          name: `${user.name.first} ${user.name.last}`,
          birth: new Date(user.registered.date).toLocaleDateString('en-PT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }),
        };
      });

      setUsers([...users, usersTreated].flat());
    });
  };

  // const filterUsers = id => {
  //   users.filter;
  // };

  return (
    <GetUsers.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {children}
    </GetUsers.Provider>
  );
};

export { GetUsersProvider, useGetUsers };
