// containers
import DonationForm from '../../src/containers/DonationForm';

// layouts
import MainLayout from '../../src/layouts/MainLayout';
import CenteredLayout from '../../src/layouts/CenteredLayout';

function Identitas() {
  return (
    <MainLayout>
      <CenteredLayout title="Donasi">
        <DonationForm />
      </CenteredLayout>
    </MainLayout>
  );
}

export default Identitas;
