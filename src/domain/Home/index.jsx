// shared
import { Box } from '../../shared';

// components
import Carousel from '../../components/Carousel';

export default function Home({ carouselPhotos = [] }) {
  return (
    <Box>
      <Carousel photos={carouselPhotos} />
    </Box>
  );
}
