import Card from '../src/shared/Card';
import MainLayout from '../src/layouts/MainLayout';
import DonationForm from '../src/containers/DonationForm';

export default function Donasi() {
  return (
    <MainLayout>
      <Card m="16px">
        <DonationForm />
      </Card>
    </MainLayout>
  );
}
