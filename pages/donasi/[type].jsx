import { useRouter } from 'next/router';

// containers
import GoldZakatForm from '../../src/containers/GoldZakatForm';

// layouts
import MainLayout from '../../src/layouts/MainLayout';
import CenteredLayout from '../../src/layouts/CenteredLayout';

export default function Donasi() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <MainLayout>
      <CenteredLayout title={`Donasi / Zakat ${type}`}>
        <GoldZakatForm />
      </CenteredLayout>
    </MainLayout>
  );
}
