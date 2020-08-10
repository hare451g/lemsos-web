import fs from 'fs';

// constants
import { CAROUSEL_PATH } from '../src/constants/paths';

// domain
import Home from '../src/domain/Home';

export default function HomePage({ carouselPhotos }) {
  return <Home carouselPhotos={carouselPhotos} />;
}

export async function getStaticProps(context) {
  // get carousel photos
  const files = fs.readdirSync(CAROUSEL_PATH);
  const carouselPhotos = files.map((file) => `/images/carousel/${file}`);

  return {
    props: { carouselPhotos }, // will be passed to the page component as props
  };
}
