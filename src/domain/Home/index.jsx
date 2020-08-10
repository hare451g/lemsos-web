// shared
import { Box } from '../../shared';

// components
import Carousel from '../../components/Carousel';

function Home({ carouselPhotos = [] }) {
  return (
    <Box>
      <Carousel photos={carouselPhotos} />
    </Box>
  );
}

export default Home;
