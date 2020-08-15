// containers
import {
  ZakatCompanyForm,
  ZakatGoldForm,
  ZakatProfessionForm,
  ZakatTradeForm,
} from '../src/containers';

// layouts
import { CenteredLayout } from '../src/layouts';

// components
import { Tab } from '../src/components';

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
    <CenteredLayout title="Kalkulator Zakat">
      <Tab initialKey="Perkerja">
        <div key="Perkerja">
          <ZakatProfessionForm
            nishab={profession.nishab}
            zakatPercentage={zakatPercentage}
          />
        </div>

        <div key="Emas">
          <ZakatGoldForm
            goldPrice={gold.goldPrice}
            nishabInGram={gold.nishabInGram}
            zakatPercentage={zakatPercentage}
          />
        </div>

        <div key="Niaga">
          <ZakatTradeForm zakatPercentage={zakatPercentage} />
        </div>

        <div key="Perusahaan">
          <ZakatCompanyForm zakatPercentage={zakatPercentage} />
        </div>
      </Tab>
    </CenteredLayout>
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
