import fs from 'fs';

// constants
import { CONTENTS_PATH } from '../src/constants/paths';

// domain
import Donasi from '../src/domain/Donasi';

// layout
import MainLayout from '../src/layouts/MainLayout';

function DonationPage({ config }) {
  return (
    <MainLayout>
      <Donasi config={config} />
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const data = require('../public/data/donasi.json');
  const config = {
    ...data,
    infaq: {
      contents: [
        ...data.infaq.contents.map((infaq) => ({
          ...infaq,
          content: fs.readFileSync(
            `${CONTENTS_PATH}/program/${infaq.content}`,
            'utf-8'
          ),
        })),
      ],
    },
  };

  return {
    props: { config },
  };
}

export default DonationPage;
