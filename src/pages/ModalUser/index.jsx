import {
  Avatar,
  Button,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from '../../components/Skeleton';
import { useGetUsers } from '../../providers/GetUsers';
import { subTittleStyle } from './styles';

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const { modalUser } = useGetUsers();

  const user = modalUser(params.id);

  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <ModalOverlay />
      <ModalContent>
        {loading ? (
          <Skeleton modal />
        ) : (
          <>
            <ModalHeader>
              <VStack>
                <Avatar src={user?.picture.medium} size="2xl" />
                <Text>{user?.name}</Text>
                <Text sx={subTittleStyle}>
                  {user?.id.value
                    ? `ID: ${user?.id.name} - ${user?.id.value}`
                    : 'ID: not informed'}
                </Text>
              </VStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack align="stretch">
                <Text>
                  <b>Email:</b> {user?.email}
                </Text>
                <Divider />
                <Text>
                  <b>Gender:</b> {user?.gender}
                </Text>
                <Divider />
                <Text>
                  <b>Birth:</b> {user?.birth}
                </Text>
                <Divider />
                <Text>
                  <b>Phone: </b>
                  {user?.cell}
                </Text>
                <Divider />
                <Text>
                  <b>Born in:</b> {user?.nat}
                </Text>
                <Divider />
                <Text>
                  <b>Address: </b>
                  {user?.location.street.name}, {user?.location.street.number},{' '}
                  {user?.location.city} - {user?.location.state},{' '}
                  {user?.location.postcode}
                </Text>
                <Divider />
                <Text>
                  <b>Link: </b>
                  <Link
                    isExternal
                    href={window.location.href}
                  >{`${window.location.href}`}</Link>
                </Text>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button size={'sm'} onClick={onClick}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ProfilePage;
