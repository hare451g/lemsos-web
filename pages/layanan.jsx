// shared components
import { Box, Card, Divider, Text } from '../src/shared';

// containers
import ZakatProfessionForm from '../src/containers/ZakatProfessionForm';

/*
  Layanan
  - Kalkulator Zakat
    - Zakat Emas
    - Zakat Perkerja
    - Zakat Perushaan
    - Zakat Niaga
*/
function LayananPage({ config }) {
  return (
    <Box maxWidth="720px" m="auto" mt="4rem">
      <Text as="h1" fontSize="3rem">
        Kalkulator Zakat
      </Text>
      <Divider />
      <Card maxWidth="720px" m="auto">
        <ZakatProfessionForm
          nishab={config.profession.nishab}
          zakatPercentage={config.profession.zakatPercentage}
        />
      </Card>
    </Box>
  );
}

export async function getStaticProps(context) {
  const { zakat } = require('../public/data/donasi.json');
  return {
    props: {
      config: zakat,
    },
  };
}

export default LayananPage;
