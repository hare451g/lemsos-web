// shared components
import { Box, Card, Divider, Flex, Text } from '../../shared';
import InfaqItem from './InfaqItem';

function Infaq({ articles = [] }) {
  return (
    <>
      <Box m="24px">
        <Text as="h1" fontSize="2rem" textAlign="center">
          INFAQ
        </Text>
        <Divider />
      </Box>
      <Flex
        as="section"
        name="Program Cards"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        {articles.map(({ img, title, content }, index) => (
          <InfaqItem
            img={img}
            title={title}
            content={content}
            key={`prog-${index + 1}`}
          />
        ))}
      </Flex>
    </>
  );
}

export default Infaq;
