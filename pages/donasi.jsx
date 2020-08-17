import { useState } from 'react';

/* 
  Donasi Online
    - INFAQ Listrik
    - INFAQ Pokok Guru
    - INFAQ Pokok Santri
    - INFAQ Sarana Prasarana
*/

// components
import { Box, Card } from '../src/shared';

// containers
import { DonationForm, TransferForm } from '../src/containers';

// Layouts
import { CenteredLayout } from '../src/layouts';

// services
import { getProvinces } from '../src/services/Region';

function DonationPage({
  infaqTypes = [],
  provinces = [],
  amount = 0,
  type = null,
  accountNumber = 74545566668,
  accountOwner = 'Yayasan Darul Qur’an Al-Muqorrobiin',
  expiredAt = '15 November 2020, 14:01',
  uniqueId = '',
}) {
  const [isSubmitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    phone: '',
    name: '',
    gender: '',
    email: '',
    province: '',
    city: '',
    amount: '',
    donationType: '',
  });

  function handleSubmit(data) {
    setForm(data);
    setSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Box my="2rem" mx={[0, 'auto']} maxWidth={['100%', '720px']}>
        <Card>
          <TransferForm
            gender={form.gender}
            name={form.name}
            type={form.type}
            amount={form.amount}
            accountNumber={accountNumber}
            accountOwner={accountOwner}
            expiredAt={expiredAt}
            uniqueId={uniqueId}
          />
        </Card>
      </Box>
    );
  }

  return (
    <CenteredLayout title="Donasi Online">
      <DonationForm
        infaqTypes={infaqTypes}
        provinces={provinces}
        initialAmount={amount}
        type={type}
        onSubmit={handleSubmit}
      />
    </CenteredLayout>
  );
}

export async function getServerSideProps({ query }) {
  const data = require('../public/data/infaq-types.json');
  const { amount = 0, infaqType = null, infaqId = null } = query;

  let type = infaqId;

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
