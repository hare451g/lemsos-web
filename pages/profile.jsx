import fs from 'fs';

// constants
import { CONTENTS_PATH } from '../src/constants/paths';

// Domain
import Profile from '../src/domain/Profile';

export default function ProfilePage({ article }) {
  return <Profile article={article} />;
}

export async function getStaticProps(context) {
  // get carousel photos
  const article = fs.readFileSync(`${CONTENTS_PATH}/profiles.md`, 'utf-8');

  return {
    props: { article }, // will be passed to the page component as props
  };
}
