/*
  Donasi Online
    - INFAQ Listrik
    - INFAQ Pokok Guru
    - INFAQ Pokok Santri
    - INFAQ Sarana Prasarana
*/

// domain
import DonationForm from '../src/containers/DonationForm';

// Layouts
import CenteredLayout from '../src/layouts/CenteredLayout';
import { getProvinces } from '../src/services/Region';

function DonationPage({ infaqTypes = [], provinces = [] }) {
  return (
    <CenteredLayout title="Donasi Online">
      <DonationForm infaqTypes={infaqTypes} provinces={provinces} />
    </CenteredLayout>
  );
}

export async function getServerSideProps(context) {
  const data = require('../public/data/infaq-types.json');

  const provinces = await getProvinces();

  return {
    props: { infaqTypes: data, provinces: provinces.list },
  };
}

export default DonationPage;
