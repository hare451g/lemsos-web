import Box from '../src/shared/Box';
import MainLayout from '../src/layouts/MainLayout';
import DonationForm from '../src/containers/DonationForm';

export default function Donasi() {
  return (
    <MainLayout>
      <Box m="16px">
        <DonationForm />
      </Box>
    </MainLayout>
  );
}
