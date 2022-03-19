import { ModalUsersProvider } from './ModalUsers';
import { TableUsersProvider } from './TableUsers';

const Providers = ({ children }) => {
  return (
    <TableUsersProvider>
      <ModalUsersProvider>{children}</ModalUsersProvider>
    </TableUsersProvider>
  );
};

export default Providers;
