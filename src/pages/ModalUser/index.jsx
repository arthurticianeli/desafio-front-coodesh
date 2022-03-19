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
import { useModalUsers } from '../../providers/ModalUsers';

import { subTittleStyle } from './styles';

function ProfilePage() {
  const { isOpen, onOpen } = useDisclosure();
  const { modalUsers, getModalUsers, maxLoaded } = useModalUsers();
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [modalUser, setModalUser] = useState({});

  const onClick = () => {
    navigate('/');
  };

  useEffect(() => {
    getModalUsers();
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setModalUser(modalUsers.find(user => user.id.value === params.id));
    !maxLoaded && modalUser
      ? Object.keys(modalUser).length > 0 && setLoading(false)
      : getModalUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalUsers, maxLoaded]);

  return (
    <Modal isOpen={isOpen} onClose={onClick}>
      <ModalOverlay />
      <ModalContent>
        {maxLoaded ? (
          <>
            <ModalHeader>
              <ModalCloseButton />
              <Text>User not founded</Text>
            </ModalHeader>
            <ModalFooter>
              <Button size={'sm'} onClick={onClick}>
                Close
              </Button>
            </ModalFooter>
          </>
        ) : loading ? (
          <Skeleton modal />
        ) : (
          <>
            <ModalHeader>
              <VStack>
                <Avatar src={modalUser?.picture.medium} size="2xl" />
                <Text>{modalUser?.name}</Text>
                <Text sx={subTittleStyle}>
                  {modalUser?.id.value
                    ? `ID: ${modalUser?.id.name} - ${modalUser?.id.value}`
                    : 'ID: not informed'}
                </Text>
              </VStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack align="stretch">
                <Text>
                  <b>Email:</b> {modalUser?.email}
                </Text>
                <Divider />
                <Text>
                  <b>Gender:</b> {modalUser?.gender}
                </Text>
                <Divider />
                <Text>
                  <b>Birth:</b> {modalUser?.birth}
                </Text>
                <Divider />
                <Text>
                  <b>Phone: </b>
                  {modalUser?.cell}
                </Text>
                <Divider />
                <Text>
                  <b>Born in:</b> {modalUser?.nat}
                </Text>
                <Divider />
                <Text>
                  <b>Address: </b>
                  {modalUser?.location.street.name},{' '}
                  {modalUser?.location.street.number},{' '}
                  {modalUser?.location.city} - {modalUser?.location.state},{' '}
                  {modalUser?.location.postcode}
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
