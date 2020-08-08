import fs from 'fs';

import Article from '../src/components/Article';

import MainLayout from '../src/layouts/MainLayout';

export default function Profile({ article }) {
  return (
    <MainLayout>
      <Article markdown={article} title="LEMSOS DQ ALMUQORROBIN" />
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  // get carousel photos
  const article = fs.readFileSync(
    `${process.cwd()}/public/contents/main/profiles/profiles.md`,
    'utf-8'
  );

  return {
    props: { article }, // will be passed to the page component as props
  };
}
