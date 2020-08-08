import ReactMarkdown from 'react-markdown';
import Content from './Content';

function Article({ markdown = 'Content is not available' }) {
  return (
    <Content>
      <ReactMarkdown source={markdown} />
    </Content>
  );
}

export default Article;
