import { useState } from 'react';
import CarouselProvider, {
  Dots,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';

import Box from '../../shared/Box';
import screen from '../../theme/screen';

// mocks
import { imgUrls } from './_mock_';

function Carousel() {
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
        {imgUrls.map((src, index) => (
          <img src={src} key={`carousel-item-${index + 1}`} width="100%" />
        ))}
      </CarouselProvider>
      <Dots
        value={current}
        onChange={handleChange}
        thumbnails={imgUrls.map((src, index) => (
          <img src={src} key={`thumb-${index + 1}`} height="42px" />
        ))}
      />
    </Box>
  );
}

export default Carousel;
