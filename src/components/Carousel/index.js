import { useState } from 'react';
import CarouselProvider, { Dots } from '@brainhubeu/react-carousel';

import Box from '../../shared/Box';
import Text from '../../shared/Text';

import Overlay from './Overlay';

function Carousel({ photos = [] }) {
  const [current, setCurrent] = useState(0);

  function handleChange(value) {
    setCurrent(value);
  }

  return (
    <Box>
      <CarouselProvider
        plugins={['centered', 'infinite', 'arrows']}
        value={current}
        onChange={handleChange}
      >
        {photos.map((src, index) => (
          <div style={{ position: 'relative' }}>
            <img src={src} key={`carousel-item-${index + 1}`} width="100%" />
            <Overlay>
              <Text as="h2" color="white">
                SEDEKAH BERKAH "KEPEDULIAN KITA KEBAHAGIAN MEREKA"
              </Text>
              <Text color="white">
                Salurkan donasi terbaik anda melalui xxxx
              </Text>
            </Overlay>
          </div>
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
