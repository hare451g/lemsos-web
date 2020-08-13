import fs from 'fs';

// components
import { Carousel } from '../src/components';

// constants
import { CAROUSEL_PATH } from '../src/constants/paths';

function HomePage({ carouselPhotos }) {
  return <Carousel photos={carouselPhotos} />;
}

export async function getStaticProps(context) {
  // get carousel photos
  const files = fs.readdirSync(CAROUSEL_PATH);
  const carouselPhotos = files.map((file) => `/images/carousel/${file}`);

  return {
    props: { carouselPhotos }, // will be passed to the page component as props
  };
}

export default HomePage;
