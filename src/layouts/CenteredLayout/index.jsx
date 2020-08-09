// Shared components
import Divider from '../../shared/Divider';
import Text from '../../shared/Text';

// layouts
import Wrapper from './Wrapper';

function CenteredLayout({ children, title = '' }) {
  return (
    <Wrapper>
      <Text as="h1" fontSize="2rem">
        {title}
      </Text>
      <Divider mb="2rem" />
      {children}
    </Wrapper>
  );
}

export default CenteredLayout;
