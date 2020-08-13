// shared components
import { Box, Card, Divider, Text } from '../src/shared';

// containers
import ZakatProfessionForm from '../src/containers/ZakatProfessionForm';
import ZakatGoldForm from '../src/containers/ZakatGoldForm';
import ZakatTradeForm from '../src/containers/ZakatTradeForm';

/*
  Layanan
  - Kalkulator Zakat
    - Zakat Emas
    - Zakat Perkerja
    - Zakat Perushaan
    - Zakat Niaga
*/
function LayananPage({ gold, profession, zakatPercentage }) {
  return (
    <Box maxWidth="720px" m="auto" mt="4rem">
      <Card maxWidth="720px" m="auto" my="2rem">
        <ZakatProfessionForm
          nishab={profession.nishab}
          zakatPercentage={zakatPercentage}
        />
      </Card>

      <Card maxWidth="720px" m="auto" my="2rem">
        <ZakatGoldForm
          goldPrice={gold.goldPrice}
          nishabInGram={gold.nishabInGram}
          zakatPercentage={zakatPercentage}
        />
      </Card>

      <Card maxWidth="720px" m="auto" my="2rem">
        <ZakatTradeForm zakatPercentage={zakatPercentage} />
      </Card>
    </Box>
  );
}

export async function getStaticProps(context) {
  const { zakat } = require('../public/data/donasi.json');
  return {
    props: {
      gold: zakat.gold,
      profession: zakat.profession,
      zakatPercentage: zakat.percentage,
    },
  };
}

export default LayananPage;
