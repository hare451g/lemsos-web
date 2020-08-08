import fs from 'fs';
import { IMAGES_PATH } from '../src/constants/paths';

import Box from '../src/shared/Box';
import Carousel from '../src/components/Carousel';
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
  const targetPath = `${IMAGES_PATH}/carousel`;
  const files = fs.readdirSync(targetPath);
  const carouselPhotos = files.map((file) => `/images/carousel/${file}`);

  return {
    props: { carouselPhotos }, // will be passed to the page component as props
  };
}
