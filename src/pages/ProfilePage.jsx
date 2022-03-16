import {
  Button,
  Divider,
  Img,
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
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetUsers } from '../providers/GetUsers';

function ProfilePage() {
  const params = useParams();

  const { modalUser } = useGetUsers();

  const user = modalUser(params.id);

  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClick}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <VStack>
              <Img src={user?.picture.medium} w="100px" borderRadius="full" />
              <Text>{user?.name}</Text>
              <Text fontSize={'12px'}>
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
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProfilePage;
