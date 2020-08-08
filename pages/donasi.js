// containers
import DonationForm from '../src/containers/DonationForm';

// layouts
import MainLayout from '../src/layouts/MainLayout';
import CenteredLayout from '../src/layouts/CenteredLayout';

export default function Donasi() {
  return (
    <MainLayout>
      <CenteredLayout title="Donasi">
        <DonationForm />
      </CenteredLayout>
    </MainLayout>
  );
}
