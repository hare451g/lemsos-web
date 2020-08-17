import { Box, Button, Card, Divider, Flex, Text } from '../../shared';
import CardImage from './CardImage';

function ProgramCard({ content, image, infaqId, onClick, title }) {
  return (
    <Card>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        minHeight={['240px', '540px']}
      >
        <Box>
          <Text as="h3" fontSize="1.25rem">
            {title}
          </Text>
          <Divider />
          <CardImage src={image} />
          <Text fontSize="1.15rem" lineHeight="1.5rem" my="1rem">
            {content}
          </Text>
        </Box>
        <Button color="primary" onClick={() => onClick(infaqId)} block>
          {title}
        </Button>
      </Flex>
    </Card>
  );
}

export default ProgramCard;
