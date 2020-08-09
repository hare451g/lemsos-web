import { useState } from 'react';
import Modal from 'react-modal';

// shared components
import { Box, Divider, Flex, Text } from '../../shared';

// containers
import GoldZakatForm from '../../containers/GoldZakatForm';

// local
import ZakatItem from './ZakatItem';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '720px',
  },
};

function Zakat({ types = [] }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleItemClick = (type) => {
    setSelectedType(type);
    toggle();
  };

  return (
    <>
      <Box m="24px">
        <Text as="h1" fontSize="2rem" textAlign="center">
          ZAKAT
        </Text>
        <Divider />
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {types.map((type) => (
          <ZakatItem
            key={type.key}
            img={type.img}
            name={type.name}
            handleItemClick={handleItemClick}
          />
        ))}
      </Flex>
      <Modal isOpen={isOpen} style={modalStyle} onRequestClose={toggle}>
        {selectedType && (
          <>
            <Text as="h1" fontSize="2rem">
              {selectedType.name}
            </Text>
            <Divider mb="2rem" />
            <GoldZakatForm />
          </>
        )}
      </Modal>
    </>
  );
}
export default Zakat;
