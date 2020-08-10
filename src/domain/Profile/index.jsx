// components
import Article from '../../components/Article';

// layouts
import CenteredLayout from '../../layouts/CenteredLayout';

function Profile({ article }) {
  return (
    <CenteredLayout title="LEMSOS DQ ALMUQORROBIN">
      <Article markdown={article} />
    </CenteredLayout>
  );
}

export default Profile;
