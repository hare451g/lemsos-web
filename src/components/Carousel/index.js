import { useState } from 'react';
import CarouselProvider, {
  Dots,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';

import Box from '../../shared/Box';
import screen from '../../theme/screen';

function Carousel({ photos = [] }) {
  const [current, setCurrent] = useState(0);
  
  function handleChange(value) {
    setCurrent(value);
  }

  return (
    <Box>
      <CarouselProvider
        plugins={['centered', 'infinite', 'arrows']}
        breakpoints={{
          [screen.mobile.frame]: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
        value={current}
        onChange={handleChange}
      >
        {photos.map((src, index) => (
          <img src={src} key={`carousel-item-${index + 1}`} width="100%" />
        ))}
      </CarouselProvider>
      <Dots
        value={current}
        onChange={handleChange}
        thumbnails={photos.map((src, index) => (
          <img src={src} key={`thumb-${index + 1}`} height="42px" />
        ))}
      />
    </Box>
  );
}

export default Carousel;
