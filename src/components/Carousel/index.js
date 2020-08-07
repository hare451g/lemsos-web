import { useState } from 'react';

function Carousel({ imgUrls = [], initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex);

  const src = imgUrls[index];

  return <img src={src} width="100%" />;
}

export default Carousel;
