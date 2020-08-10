import Modal from 'react-modal';

// hooks
import useToggle from '../../hooks/useToggle';

// domain - constant
import modal from './constants/modal';

// domain - components
import CardDeck from './components/CardDeck';

// domain - containers
import GoldZakatForm from './containers/ZakatGoldForm';
import { useState } from 'react';
import Article from '../../components/Article';

function Donasi({ config = {} }) {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [type, setType] = useState(null);

  const handleDonationItemClick = ({ key, img, name, content }) => {
    toggleModal();
    setType({ key, img, name, content });
  };

  return (
    <>
      <CardDeck
        title="INFAQ"
        contents={config.infaq.contents}
        onItemClick={handleDonationItemClick}
      />
      <CardDeck
        title="ZAKAT"
        contents={config.zakat.contents}
        onItemClick={handleDonationItemClick}
      />
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={modal.style}
      >
        {type && <Article markdown={type.content} />}
      </Modal>
    </>
  );
}

export default Donasi;
