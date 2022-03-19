import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const modalUsersContext = createContext({});

const useModalUsers = () => {
  const context = useContext(modalUsersContext);

  return context;
};

const ModalUsersProvider = ({ children }) => {
  const [modalUsers, setModalUsers] = useState([]);
  const [listSize, setListSize] = useState(50);
  const [maxLoaded, setMaxLoaded] = useState(false);

  const getModalUsers = async data => {
    await api.get(`&results=${listSize}`, data).then(response => {
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
        };
      });

      const update = () => {
        setListSize(listSize + 50);
        setModalUsers([fixNameAndBirth].flat());
      };

      listSize < 1000 ? update() : setMaxLoaded(true);
    });
  };

  return (
    <modalUsersContext.Provider
      value={{
        modalUsers,
        getModalUsers,
        maxLoaded,
      }}
    >
      {children}
    </modalUsersContext.Provider>
  );
};

export { ModalUsersProvider, useModalUsers };
