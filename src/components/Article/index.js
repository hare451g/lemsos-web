import ReactMarkdown from 'react-markdown';

import Text from '../../shared/Text';

import Content from './Content';
import Wrapper from './Wrapper';

function Article({ title = '', markdown = 'Content is not available' }) {
  return (
    <Wrapper>
      <Text as="h1" fontSize="2.25rem">
        {title}
      </Text>
      <Content>
        <ReactMarkdown source={markdown} />
      </Content>
    </Wrapper>
  );
}

export default Article;
