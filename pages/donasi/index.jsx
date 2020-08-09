import { useState } from 'react';

// layouts
import CenteredLayout from '../../src/layouts/CenteredLayout';
import MainLayout from '../../src/layouts/MainLayout';

// containers
import GoldZakatForm from '../../src/containers/GoldZakatForm';

// shared components
import { Box, Card, Divider, Flex, Text } from '../../src/shared';

function Donasi({ zakatTypes }) {
  const [selectedForm, setSelectedForm] = useState(null);
  const handleCardClick = (key) => {
    setSelectedForm(key);
  };

  return (
    <MainLayout>
      <Box m="24px">
        <Text as="h1" fontSize="2rem" textAlign="center">
          Mari Tunaikan Zakat
        </Text>
        <Divider />
      </Box>
      <Flex m="24px" flexWrap="wrap" justifyContent="space-evenly">
        {zakatTypes.map(({ img, key, name }) => (
          <Card
            width="240px"
            mb="1rem"
            onClick={() => handleCardClick(key)}
            key={key}
          >
            <img src={img} width="100%" />
            <Divider />
            <Text textAlign="center" fontSize="1.15rem" fontWeight="700">
              {name}
            </Text>
          </Card>
        ))}
      </Flex>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const zakatTypes = [
    {
      key: 'zakat_profesi',
      name: 'Zakat Profesi',
      img: '/images/donation/working.jfif',
    },
    {
      key: 'zakat_niaga',
      name: 'Zakat Niaga',
      img: '/images/donation/trade.jfif',
    },
    {
      key: 'zakat_emas',
      name: 'Zakat Emas',
      img: '/images/donation/gold.jfif',
    },
    {
      key: 'zakat_perusahaan',
      name: 'Zakat Perusahaan',
      img: '/images/donation/company.jfif',
    },
  ];

  return {
    props: { zakatTypes }, // will be passed to the page component as props
  };
}

export default Donasi;
