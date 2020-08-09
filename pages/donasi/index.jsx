import { useState } from 'react';

// components
import Zakat from '../../src/components/Zakat';
import Infaq from '../../src/components/Infaq';

// containers
import GoldZakatForm from '../../src/containers/GoldZakatForm';

// constants
import { CONTENTS_PATH } from '../../src/constants/paths';

// layouts
import CenteredLayout from '../../src/layouts/CenteredLayout';
import MainLayout from '../../src/layouts/MainLayout';

// shared components
import { Text } from '../../src/shared';

// theme
import colors from '../../src/theme/colors';

// utils
import { getMDfromFile } from '../../src/utils/contents';

function Donasi({ zakatTypes = [], infaqContents = [] }) {
  const [selectedType, setSelectedType] = useState(null);

  function handleZakatClick(key) {
    setSelectedType(key);
  }

  return (
    <MainLayout>
      <Zakat types={zakatTypes} onZakatClick={handleZakatClick} />
      <Infaq articles={infaqContents} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const path = `${CONTENTS_PATH}/program`;

  const articles = require('../../src/constants/programArticles.json');
  const zakatTypes = require('../../src/constants/zakatTypes.json');

  const infaqContents = articles.list.map((article) => ({
    ...article,
    content: getMDfromFile(`${path}/${article.content}`),
  }));

  return {
    props: { zakatTypes, infaqContents }, // will be passed to the page component as props
  };
}

export default Donasi;
