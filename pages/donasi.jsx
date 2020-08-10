import fs from 'fs';

// constants
import { CONTENTS_PATH } from '../src/constants/paths';

// domain
import Donasi from '../src/domain/Donasi';

function DonationPage({ config }) {
  return <Donasi config={config} />;
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
