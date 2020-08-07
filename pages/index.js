import Box from '../src/shared/Box';
import Carousel from '../src/components/Carousel';
import MainLayout from '../src/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Box>
        <Carousel />
      </Box>
    </MainLayout>
  );
}
