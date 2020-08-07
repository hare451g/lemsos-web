import MainLayout from '../src/layouts/MainLayout';
import Carousel from '../src/components/Carousel';
import { imgUrls } from '../src/components/Carousel/_mock_';

export default function Home() {
  return (
    <MainLayout>
      <Carousel imgUrls={imgUrls} initialIndex={2} />
    </MainLayout>
  );
}
