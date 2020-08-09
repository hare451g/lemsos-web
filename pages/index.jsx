import fs from 'fs';

// shared
import { Box } from '../src/shared';

// constants
import { CAROUSEL_PATH } from '../src/constants/paths';

// components
import Carousel from '../src/components/Carousel';

// layouts
import MainLayout from '../src/layouts/MainLayout';

export default function Home({ carouselPhotos }) {
  return (
    <MainLayout>
      <Box>
        <Carousel photos={carouselPhotos} />
      </Box>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  // get carousel photos
  const files = fs.readdirSync(CAROUSEL_PATH);
  const carouselPhotos = files.map((file) => `/images/carousel/${file}`);

  return {
    props: { carouselPhotos }, // will be passed to the page component as props
  };
}
