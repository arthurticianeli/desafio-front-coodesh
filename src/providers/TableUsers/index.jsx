import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const tableUsersContext = createContext({});

const useTableUsers = () => {
  const context = useContext(tableUsersContext);

  return context;
};

const TableUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxLoaded, setMaxLoaded] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getTableUsers = async data => {
    await api.get(`?page=${page}&results=50`, data).then(response => {
      const filterInvalidID = response.data.results.filter(
        user => user.id.value !== null
      );

      const fixNameAndBirth = filterInvalidID.map(user => {
        return {
          ...user,
          name: `${user.name.first} ${user.name.last}`,
          birth: new Date(user.registered.date).toLocaleDateString('en-PT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }),
          page: page,
        };
      });

      setUsers([...users, fixNameAndBirth].flat());
      setLoading(false);

      page < 100 ? setPage(page + 1) : setMaxLoaded(true);
    });
  };

  const filterUser = term =>
    term.length
      ? setFilteredUsers(
          users.filter(
            user =>
              user.name.toLowerCase().includes(term.toLowerCase()) ||
              user.nat.toLowerCase().includes(term.toLowerCase())
          )
        ) || []
      : setFilteredUsers(users);

  return (
    <tableUsersContext.Provider
      value={{
        users,
        getTableUsers,
        filteredUsers,
        filterUser,
        loading,
        maxLoaded,
      }}
    >
      {children}
    </tableUsersContext.Provider>
  );
};

export { TableUsersProvider, useTableUsers };
