import fs from 'fs';

// constants
import { CONTENTS_PATH } from '../src/constants/paths';

// components
import Article from '../src/components/Article';

// layouts
import CenteredLayout from '../src/layouts/CenteredLayout';

export default function Profile({ article }) {
  return (
    <CenteredLayout title="LEMSOS DQ ALMUQORROBIN">
      <Article markdown={article} />
    </CenteredLayout>
  );
}

export async function getStaticProps(context) {
  // get carousel photos
  const article = fs.readFileSync(`${CONTENTS_PATH}/profiles.md`, 'utf-8');

  return {
    props: { article }, // will be passed to the page component as props
  };
}
