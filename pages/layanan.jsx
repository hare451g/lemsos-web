import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleSubmit = (form) => {
    router.push({
      pathname: '/donasi',
      query: form,
    });
  };

  return (
    <CenteredLayout title="Kalkulator Zakat">
      <Tab initialKey="Pekerja">
        <div key="Pekerja">
          <ZakatProfessionForm
            nishab={profession.nishab}
            zakatPercentage={zakatPercentage}
            onSubmit={handleSubmit}
            infaqType="Pekerja"
          />
        </div>

        <div key="Emas">
          <ZakatGoldForm
            goldPrice={gold.goldPrice}
            nishabInGram={gold.nishabInGram}
            zakatPercentage={zakatPercentage}
            onSubmit={handleSubmit}
            infaqType="Emas"
          />
        </div>

        <div key="Niaga">
          <ZakatTradeForm
            zakatPercentage={zakatPercentage}
            onSubmit={handleSubmit}
            infaqType="Niaga"
          />
        </div>

        <div key="Perusahaan">
          <ZakatCompanyForm
            zakatPercentage={zakatPercentage}
            onSubmit={handleSubmit}
            infaqType="Perusahaan"
          />
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
