import fs from 'fs';
import path from 'path';

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
  const files = fs.readdirSync(`${process.cwd()}/public/images/carousel/`);
  const carouselPhotos = files.map(file => `/images/carousel/${file}`)

  return {
    props: {carouselPhotos}, // will be passed to the page component as props
  }
}