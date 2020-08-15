/*
  Donasi Online
    - INFAQ Listrik
    - INFAQ Pokok Guru
    - INFAQ Pokok Santri
    - INFAQ Sarana Prasarana
*/

// domain
import { DonationForm } from '../src/containers';

// Layouts
import { CenteredLayout } from '../src/layouts';

// services
import { getProvinces } from '../src/services/Region';

function DonationPage({ infaqTypes = [], provinces = [], amount, type }) {
  return (
    <CenteredLayout title="Donasi Online">
      <DonationForm
        infaqTypes={infaqTypes}
        provinces={provinces}
        initialAmount={amount}
        type={type}
      />
    </CenteredLayout>
  );
}

export async function getServerSideProps({ query }) {
  const data = require('../public/data/infaq-types.json');
  const { amount = 0, infaqType = null } = query;

  let type = null;

  if (infaqType) {
    const index = data.findIndex((item) => item.key === infaqType);
    type = data[index].id;
  }

  const provinces = await getProvinces();

  return {
    props: {
      infaqTypes: data,
      provinces: provinces.list,
      amount,
      type,
    },
  };
}

export default DonationPage;
